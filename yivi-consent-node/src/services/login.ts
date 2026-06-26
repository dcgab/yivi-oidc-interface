import type { HydraAdminClient, YiviApiClient } from "../dependencies";
import { upstreamError } from "../errors";
import { getSubject } from "./attributes";
import { verifyResultJwt } from "./yivi-jwt";

type LoginService = {
  getLoginPage(loginChallenge: string): Promise<void>;
  reject(loginChallenge: string): Promise<string>;
  accept(loginChallenge: string, jwtToken: string): Promise<string>;
};

const createLoginService = (
  hydraAdmin: HydraAdminClient,
  yiviClient: YiviApiClient,
): LoginService => ({
  async getLoginPage(loginChallenge) {
    try {
      await hydraAdmin.getOAuth2LoginRequest({ loginChallenge });
    } catch (error) {
      throw upstreamError("Login challenge expired", error, "login_failed");
    }
  },

  async reject(loginChallenge) {
    const { data: body } = await hydraAdmin.rejectOAuth2LoginRequest({
      loginChallenge,
      rejectOAuth2Request: {
        error: "access_denied",
        error_description: "The resource owner denied the request",
      },
    });
    return String(body.redirect_to);
  },

  async accept(loginChallenge, jwtToken) {
    try {
      const key = await yiviClient.getPublicKey();
      const verifiedJwt = verifyResultJwt(jwtToken, key);

      await hydraAdmin.getOAuth2LoginRequest({ loginChallenge });

      const { data: body } = await hydraAdmin.acceptOAuth2LoginRequest({
        loginChallenge,
        acceptOAuth2LoginRequest: {
          subject: getSubject(verifiedJwt),
          context: {
            yivi_jwt: jwtToken,
          },
        },
      });

      return String(body.redirect_to);
    } catch (error) {
      throw upstreamError("Invalid key or expired token", error, "login_failed");
    }
  },
});

export { createLoginService };
export type { LoginService };
