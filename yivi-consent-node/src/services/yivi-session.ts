import type { HydraAdminClient, YiviApiClient } from "../dependencies";
import { upstreamError } from "../errors";
import { getString } from "../request";
import type { YiviSessionResult } from "../types";
import { createDisclosureRequestFromScopes } from "./disclosure";

type YiviSessionService = {
  start(loginChallenge: string): Promise<YiviSessionResult>;
  result(sessionToken: string): Promise<{ jwt: string }>;
};

const createYiviSessionService = (
  hydraAdmin: HydraAdminClient,
  yiviClient: YiviApiClient,
): YiviSessionService => ({
  async start(loginChallenge) {
    try {
      const { data: body } = await hydraAdmin.getOAuth2LoginRequest({
        loginChallenge,
      });
      const requestedScope =
        body.requested_scope?.filter(
          (scope): scope is string => getString(scope) !== undefined,
        ) ?? [];
      return await yiviClient.createSession(
        createDisclosureRequestFromScopes(requestedScope),
      );
    } catch (error) {
      throw upstreamError("Invalid key or expired token", error, "yivi_error");
    }
  },

  async result(sessionToken) {
    try {
      const result = await yiviClient.getSessionResultJwt(sessionToken);
      return { jwt: result };
    } catch (error) {
      throw upstreamError("Yivi session result unavailable", error, "yivi_error");
    }
  },
});

export { createYiviSessionService };
export type { YiviSessionService };
