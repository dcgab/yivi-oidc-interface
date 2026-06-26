import assert from "node:assert/strict";
import http from "node:http";
import test from "node:test";

import jwt from "jsonwebtoken";

import { createApp } from "../src/app";
import type { AppDependencies, HydraAdminClient } from "../src/dependencies";
import type { YiviSessionResult } from "../src/types";

const jwtSecret = "test-secret";

type RequestOptions = {
  method?: "GET" | "POST";
  body?: Record<string, string>;
};

const createDisclosureAttribute = (id: string, rawvalue: string) => ({
  id,
  rawvalue,
  status: "PRESENT",
  issuancetime: 1,
  value: {
    "": rawvalue,
    en: rawvalue,
    nl: rawvalue,
  },
});

const createYiviJwt = () =>
  jwt.sign(
    {
      proofStatus: "VALID",
      disclosed: [
        [
          createDisclosureAttribute(
            "pbdf.sidn-pbdf.email.email",
            "user@example.com",
          ),
        ],
      ],
      exp: Math.round(Date.now() / 1000) + 60,
    },
    jwtSecret,
  );

const createHydraMock = (contextJwt = createYiviJwt()): HydraAdminClient => ({
  getOAuth2LoginRequest: async () => ({
    data: {
      requested_scope: [
        "openid",
        "offline",
        "pbdf.sidn-pbdf.email.email",
        "profile",
      ],
    },
  }),
  acceptOAuth2LoginRequest: async () => ({
    data: { redirect_to: "https://client.example/callback" },
  }),
  rejectOAuth2LoginRequest: async () => ({
    data: { redirect_to: "https://client.example/rejected" },
  }),
  getOAuth2ConsentRequest: async () => ({
    data: {
      context: {
        yivi_jwt: contextJwt,
      },
      requested_scope: ["openid", "pbdf.sidn-pbdf.email.email"],
      requested_access_token_audience: [],
      subject: "user@example.com",
      client: {
        client_id: "client",
        client_name: "Example Client",
      },
      skip: false,
    },
  }),
  acceptOAuth2ConsentRequest: async () => ({
    data: { redirect_to: "https://client.example/consent-accepted" },
  }),
  rejectOAuth2ConsentRequest: async () => ({
    data: { redirect_to: "https://client.example/consent-rejected" },
  }),
});

const createDependencies = (): AppDependencies => {
  const yiviClient = {
    createSession: async (request: unknown): Promise<YiviSessionResult> => ({
      sessionToken: "session-token",
      request,
    }),
    getPublicKey: async () => jwtSecret,
    getSessionResultJwt: async () => "result-jwt",
  };

  return {
    hydraAdmin: createHydraMock(),
    yiviClient,
  };
};

const withServer = async (
  dependencies: AppDependencies,
  run: (baseUrl: string) => Promise<void>,
) => {
  const app = createApp(dependencies);
  const server = http.createServer(app);
  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  assert(address && typeof address === "object");

  try {
    await run(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
};

const request = async (
  baseUrl: string,
  path: string,
  options: RequestOptions = {},
) => {
  const body =
    options.body === undefined
      ? undefined
      : new URLSearchParams(options.body).toString();

  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method ?? "GET",
    headers:
      body === undefined
        ? undefined
        : { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    redirect: "manual",
  });

  return {
    body: await response.text(),
    headers: response.headers,
    status: response.status,
  };
};

test("starts a Yivi session from mapped Hydra scopes", async () => {
  const dependencies = createDependencies();
  await withServer(dependencies, async (baseUrl) => {
    const response = await request(baseUrl, "/start/login-challenge");

    assert.equal(response.status, 200);
    const payload = JSON.parse(response.body) as {
      sessionToken: string;
      request: { disclose: string[][][] };
    };
    assert.equal(payload.sessionToken, "session-token");
    assert.deepEqual(payload.request.disclose, [
      [["pbdf.sidn-pbdf.email.email"]],
    ]);
  });
});

test("returns Yivi result JWT payloads", async () => {
  await withServer(createDependencies(), async (baseUrl) => {
    const response = await request(baseUrl, "/result/session-token");

    assert.equal(response.status, 200);
    assert.deepEqual(JSON.parse(response.body), { jwt: "result-jwt" });
  });
});

test("accepts a valid Yivi login result", async () => {
  await withServer(createDependencies(), async (baseUrl) => {
    const response = await request(baseUrl, "/login", {
      method: "POST",
      body: {
        login_challenge: "login-challenge",
        jwt: createYiviJwt(),
      },
    });

    assert.equal(response.status, 302);
    assert.equal(
      response.headers.get("location"),
      "https://client.example/callback",
    );
  });
});

test("renders consent data from trusted Yivi context", async () => {
  await withServer(createDependencies(), async (baseUrl) => {
    const response = await request(
      baseUrl,
      "/consent?consent_challenge=consent-challenge",
    );

    assert.equal(response.status, 200);
    assert.match(response.body, /Example Client/);
    assert.match(response.body, /Email address/);
    assert.match(response.body, /user@example.com/);
  });
});

test("returns controlled client errors for missing required input", async () => {
  await withServer(createDependencies(), async (baseUrl) => {
    const missingLoginChallenge = await request(baseUrl, "/login", {
      method: "POST",
      body: {
        jwt: createYiviJwt(),
      },
    });
    assert.equal(missingLoginChallenge.status, 400);
    assert.match(missingLoginChallenge.body, /Missing login challenge/);

    const missingStartChallenge = await request(baseUrl, "/start");
    assert.equal(missingStartChallenge.status, 400);
    assert.match(missingStartChallenge.body, /Hydra login challenge/);
  });
});

test("returns a controlled error when upstream session creation fails", async () => {
  const dependencies = createDependencies();
  dependencies.yiviClient.createSession = async () => {
    throw new Error("upstream unavailable");
  };

  await withServer(dependencies, async (baseUrl) => {
    const response = await request(baseUrl, "/start/login-challenge");

    assert.equal(response.status, 400);
    assert.match(response.body, /Invalid key or expired token/);
  });
});
