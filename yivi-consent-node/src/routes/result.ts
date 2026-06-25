// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import { yiviClient } from "../config"

const router = express.Router();

router.get('/:sessionToken', async (req, res) => {
    if (!req.params.sessionToken) {
        return res.sendStatus(400);
    }

    try {
        const result = await yiviClient.getSessionResultJwt(req.params.sessionToken)
        return res.json({jwt: result});
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
})

export default router
