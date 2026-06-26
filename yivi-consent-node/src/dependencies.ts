import type { OAuth2Api } from "@ory/client";

import type { YiviSessionResult } from "./types";

type HydraAdminClient = Pick<
  OAuth2Api,
  | "acceptOAuth2ConsentRequest"
  | "acceptOAuth2LoginRequest"
  | "getOAuth2ConsentRequest"
  | "getOAuth2LoginRequest"
  | "rejectOAuth2ConsentRequest"
  | "rejectOAuth2LoginRequest"
>;

type YiviApiClient = {
  createSession(request: unknown): Promise<YiviSessionResult>;
  getPublicKey(): Promise<string>;
  getSessionResultJwt(sessionToken: string): Promise<string>;
};

type AppDependencies = {
  hydraAdmin: HydraAdminClient;
  yiviClient: YiviApiClient;
};

export type { AppDependencies, HydraAdminClient, YiviApiClient };
