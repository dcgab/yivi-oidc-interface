// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import path from 'path';
// import { hydraAdmin } from "../config"

const router = express.Router();

router.get('/', (_, res) => {
    res.sendFile(path.join(process.cwd(), 'dist/public/index.html'))
})

export default router
