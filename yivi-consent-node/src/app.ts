import path from "path";
import express from "express";

import type { AppDependencies } from "./dependencies";
import { errorHandler, notFoundHandler } from "./errors";
import { createConsentRouter } from "./routes/consent";
import { createLoginRouter } from "./routes/login";
import { createResultRouter } from "./routes/result";
import status from "./routes/status";
import { createStartRouter } from "./routes/start";
import { createConsentService } from "./services/consent";
import { createLoginService } from "./services/login";
import { createYiviSessionService } from "./services/yivi-session";

const createApp = ({ hydraAdmin, yiviClient }: AppDependencies) => {
  const app = express();
  const yiviSessionService = createYiviSessionService(hydraAdmin, yiviClient);
  const loginService = createLoginService(hydraAdmin, yiviClient);
  const consentService = createConsentService(hydraAdmin);

  app.set("views", path.join(process.cwd(), "./src/views"));
  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: false }));

  app.use("/", express.static(path.join(process.cwd(), "./dist/public")));

  app.use("/login", createLoginRouter(loginService));
  app.use("/status", status);
  app.use("/start", createStartRouter(yiviSessionService));
  app.use("/result", createResultRouter(yiviSessionService));
  app.use("/consent", createConsentRouter(consentService));

  app.all("/{*splat}", notFoundHandler);
  app.use(errorHandler);

  return app;
};

export { createApp };
