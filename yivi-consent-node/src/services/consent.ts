import type { HydraAdminClient } from "../dependencies";
import { badRequest, upstreamError } from "../errors";
import { getString } from "../request";
import { isRecord } from "../types";
import {
  createConsentDisplayData,
  createConsentSession,
} from "./attributes";
import { decodeTrustedContextJwt } from "./yivi-jwt";

type ConsentViewModel = {
  challenge: string;
  requestedData: Record<string, string>;
  user: string | undefined;
  client: unknown;
};

type ConsentService = {
  getConsent(consentChallenge: string): Promise<
    | { type: "render"; viewModel: ConsentViewModel }
    | { type: "redirect"; redirectTo: string }
  >;
  reject(consentChallenge: string): Promise<string>;
  accept(consentChallenge: string, remember: boolean): Promise<string>;
};

const getContextJwt = (context: unknown): string => {
  if (!isRecord(context)) {
    throw badRequest("Missing Yivi JWT in consent request context");
  }

  const contextJwt = getString(context.yivi_jwt);
  if (!contextJwt) {
    throw badRequest("Missing Yivi JWT in consent request context");
  }
  return contextJwt;
};

const createConsentService = (hydraAdmin: HydraAdminClient): ConsentService => ({
  async getConsent(consentChallenge) {
    try {
      const { data: body } = await hydraAdmin.getOAuth2ConsentRequest({
        consentChallenge,
      });
      const decodedJwt = decodeTrustedContextJwt(getContextJwt(body.context));

      if (body.skip || body.client?.skip_consent) {
        const { data: acceptBody } = await hydraAdmin.acceptOAuth2ConsentRequest({
          consentChallenge,
          acceptOAuth2ConsentRequest: {
            grant_scope: body.requested_scope,
            grant_access_token_audience: body.requested_access_token_audience,
            session: createConsentSession(decodedJwt),
            remember: false,
            remember_for: 0,
          },
        });
        return { type: "redirect", redirectTo: String(acceptBody.redirect_to) };
      }

      return {
        type: "render",
        viewModel: {
          challenge: consentChallenge,
          requestedData: createConsentDisplayData(decodedJwt),
          user: body.subject,
          client: body.client,
        },
      };
    } catch (error) {
      throw upstreamError("Consent challenge expired", error, "consent_failed");
    }
  },

  async reject(consentChallenge) {
    const { data: body } = await hydraAdmin.rejectOAuth2ConsentRequest({
      consentChallenge,
      rejectOAuth2Request: {
        error: "access_denied",
        error_description: "The resource owner denied the request",
      },
    });
    return String(body.redirect_to);
  },

  async accept(consentChallenge, remember) {
    try {
      const { data: body } = await hydraAdmin.getOAuth2ConsentRequest({
        consentChallenge,
      });
      const decodedJwt = decodeTrustedContextJwt(getContextJwt(body.context));

      const { data: acceptBody } = await hydraAdmin.acceptOAuth2ConsentRequest({
        consentChallenge,
        acceptOAuth2ConsentRequest: {
          grant_scope: body.requested_scope,
          grant_access_token_audience: body.requested_access_token_audience,
          session: createConsentSession(decodedJwt),
          remember,
          remember_for: 0,
        },
      });
      return String(acceptBody.redirect_to);
    } catch (error) {
      throw upstreamError("Consent flow failed", error, "consent_failed");
    }
  },
});

export { createConsentService };
export type { ConsentService, ConsentViewModel };
