import express from "express";
import type { Request } from "express";

import { requireString } from "../request";
import type { YiviSessionService } from "../services/yivi-session";

type ResultParams = {
  sessionToken?: string;
};

const createResultRouter = (yiviSessionService: YiviSessionService) => {
  const router = express.Router();

  router.get("/:sessionToken", async (req: Request<ResultParams>, res) => {
    const sessionToken = requireString(req.params.sessionToken, "session token");
    return res.json(await yiviSessionService.result(sessionToken));
  });

  return router;
};

export { createResultRouter };
