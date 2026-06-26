import express from "express";
import path from "path";
import type { Request } from "express";

import { getString, requireString } from "../request";
import type { LoginService } from "../services/login";

type LoginQuery = {
  login_challenge?: string;
};

type LoginBody = {
  jwt?: unknown;
  login_challenge?: unknown;
  aborted?: unknown;
};

const createLoginRouter = (loginService: LoginService) => {
  const router = express.Router();

  router.get(
    "/",
    async (
      req: Request<Record<string, never>, unknown, LoginBody, LoginQuery>,
      res,
    ) => {
      const loginChallenge = requireString(
        req.query.login_challenge,
        "login challenge",
      );

      await loginService.getLoginPage(loginChallenge);
      res.sendFile(path.join(process.cwd(), "dist/public/index.html"));
    },
  );

  router.post(
    "/",
    async (req: Request<Record<string, never>, unknown, LoginBody>, res) => {
      const loginChallenge = requireString(
        req.body.login_challenge,
        "login challenge",
      );
      const aborted = getString(req.body.aborted);

      if (aborted === "true") {
        return res.redirect(await loginService.reject(loginChallenge));
      }

      const jwtToken = requireString(req.body.jwt, "JWT token");
      return res.redirect(await loginService.accept(loginChallenge, jwtToken));
    },
  );

  return router;
};

export { createLoginRouter };
