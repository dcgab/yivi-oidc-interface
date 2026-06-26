import assert from "node:assert/strict";
import test from "node:test";

import jwt from "jsonwebtoken";

import {
  createConsentDisplayData,
  createConsentSession,
  getAttributeLabel,
  getSubject,
} from "../src/services/attributes";
import { createDisclosureRequestFromScopes } from "../src/services/disclosure";
import {
  decodeTrustedContextJwt,
  verifyResultJwt,
} from "../src/services/yivi-jwt";
import type { VerifiedYiviJwtPayload, YiviDisclosureAttribute } from "../src/types";

const jwtSecret = "test-secret";

const attribute = (
  id: string,
  rawvalue: string,
): YiviDisclosureAttribute => ({
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

const payload = (
  disclosed = [
    [
      attribute("pbdf.sidn-pbdf.mobilenumber.mobilenumber", "+31600000000"),
      attribute("pbdf.sidn-pbdf.email.email", "user@example.com"),
    ],
  ],
): VerifiedYiviJwtPayload => ({
  proofStatus: "VALID",
  disclosed,
  exp: Math.round(Date.now() / 1000) + 60,
});

test("verifies Yivi result JWTs and validates proof status", () => {
  const token = jwt.sign(payload(), jwtSecret);

  assert.equal(verifyResultJwt(token, jwtSecret).proofStatus, "VALID");

  const invalidProofToken = jwt.sign(
    {
      ...payload(),
      proofStatus: "INVALID",
    },
    jwtSecret,
  );

  assert.throws(() => verifyResultJwt(invalidProofToken, jwtSecret), {
    message: "Disclosure resulted with invalid proof",
  });
});

test("decodes trusted context JWTs and rejects expired payloads", () => {
  const token = jwt.sign(payload(), jwtSecret);
  assert.equal(decodeTrustedContextJwt(token).proofStatus, "VALID");

  const expiredToken = jwt.sign(
    {
      ...payload(),
      exp: Math.round(Date.now() / 1000) - 1,
    },
    jwtSecret,
  );

  assert.throws(() => decodeTrustedContextJwt(expiredToken), {
    message: "Yivi JWT token expired",
  });
});

test("derives subjects using preferred identifier ordering", () => {
  assert.equal(getSubject(payload()), "user@example.com");

  assert.equal(
    getSubject(
      payload([[attribute("pbdf.gemeente.personalData.firstnames", "Ada")]]),
    ),
    "Ada",
  );
});

test("maps OAuth scopes to Yivi disclosure attributes", () => {
  assert.deepEqual(
    createDisclosureRequestFromScopes([
      "openid",
      "offline",
      "profile",
      "pbdf.sidn-pbdf.email.email",
    ]),
    {
      "@context": "https://irma.app/ld/request/disclosure/v2",
      disclose: [[["pbdf.sidn-pbdf.email.email"]]],
    },
  );
});

test("maps disclosed attributes to consent display data and OIDC claims", () => {
  const verifiedPayload = payload([
    [
      attribute("pbdf.sidn-pbdf.email.email", "user@example.com"),
      attribute("unknown.attribute", "unknown-value"),
    ],
  ]);

  assert.equal(getAttributeLabel("unknown.attribute"), "unknown.attribute");
  assert.deepEqual(createConsentDisplayData(verifiedPayload), {
    "Email address": "user@example.com",
    "unknown.attribute": "unknown-value",
  });
  assert.deepEqual(createConsentSession(verifiedPayload).id_token, {
    email: "user@example.com",
  });
});
