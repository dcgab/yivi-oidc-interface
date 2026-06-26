import express from "express";
import type { Request } from "express";

import { getRemember, getString, requireString } from "../request";
import type { ConsentService } from "../services/consent";

type ConsentQuery = {
  consent_challenge?: string;
};

type ConsentBody = {
  challenge?: unknown;
  submit?: unknown;
  remember?: unknown;
};

const createConsentRouter = (consentService: ConsentService) => {
  const router = express.Router();

  router.get(
    "/",
    async (
      req: Request<Record<string, never>, unknown, ConsentBody, ConsentQuery>,
      res,
    ) => {
      const consentChallenge = requireString(
        req.query.consent_challenge,
        "consent challenge",
      );
      const result = await consentService.getConsent(consentChallenge);

      if (result.type === "redirect") {
        return res.redirect(result.redirectTo);
      }

      return res.render("consent.ejs", result.viewModel);
    },
  );

  router.post(
    "/",
    async (req: Request<Record<string, never>, unknown, ConsentBody>, res) => {
      const challenge = requireString(req.body.challenge, "consent challenge");
      const submit = getString(req.body.submit);

      if (submit === "Deny") {
        return res.redirect(await consentService.reject(challenge));
      }

      return res.redirect(
        await consentService.accept(challenge, getRemember(req.body.remember)),
      );
    },
  );

  return router;
};

export { createConsentRouter };
