// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import { irmaBackend } from "../config"

const router = express.Router();

router.get('/:sessionToken', (req, res) => {
    if(!req.params.sessionToken) res.sendStatus(400);
    irmaBackend.getSessionResultJwt(req.params.sessionToken)
        .then((result: any) => {
        return res.json({jwt: result});
        })
        .catch((e: any) => {
        console.log(e);
        res.sendStatus(400);
        })
})

export default router
