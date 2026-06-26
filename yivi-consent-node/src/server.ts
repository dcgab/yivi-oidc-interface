import dotenv from "dotenv";
import ViteExpress from "vite-express";

dotenv.config();

import { hydraAdmin, runtimeConfig, yiviClient } from "./config";
import { createApp } from "./app";

const app = createApp({ hydraAdmin, yiviClient });

ViteExpress.listen(app, runtimeConfig.port, () => {
  console.log(`Server is listening on port ${runtimeConfig.port}...`);
});
