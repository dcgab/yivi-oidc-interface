// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import { irmaBackend } from "../config"

const irmaRequest = {
    '@context': 'https://irma.app/ld/request/disclosure/v2',
    'disclose': [
      [[ "pbdf.sidn-pbdf.mobilenumber.mobilenumber"]],
      [[ "pbdf.sidn-pbdf.email.email" ]]
    ]
  }

const router = express.Router();

router.get('/', (_, res) => {
    console.log("GET /start");
    
    irmaBackend.startSession(irmaRequest)
    .then((result: any) => {
        res.json(result);
    })
    .catch((e: any) => {
        console.log(JSON.stringify(e));
        
    })
})

export default router
