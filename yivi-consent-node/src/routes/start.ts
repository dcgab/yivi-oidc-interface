import express from "express";
import type { Request } from "express";

import { badRequest } from "../errors";
import { requireString } from "../request";
import type { YiviSessionService } from "../services/yivi-session";

type StartParams = {
  login_challenge?: string;
};

const createStartRouter = (yiviSessionService: YiviSessionService) => {
  const router = express.Router();

  router.get("/:login_challenge", async (req: Request<StartParams>, res) => {
    const hydraLoginChallenge = requireString(
      req.params.login_challenge,
      "login challenge",
    );
    return res.json(await yiviSessionService.start(hydraLoginChallenge));
  });

  router.get("/", () => {
    throw badRequest("Endpoint must include a Hydra login challenge");
  });

  return router;
};

export { createStartRouter };
