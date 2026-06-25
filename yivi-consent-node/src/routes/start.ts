// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import type { Request } from "express"
import { hydraAdmin, yiviClient } from "../config"
import { getString } from "../types"

// const irmaRequest = {
//   '@context': 'https://irma.app/ld/request/disclosure/v2',
//   'disclose': [
//     [["pbdf.sidn-pbdf.mobilenumber.mobilenumber"]],
//     [["pbdf.sidn-pbdf.email.email"]]
//   ]
// }

type DisclosureRequest = {
  '@context': 'https://irma.app/ld/request/disclosure/v2';
  'disclose': Array<Array<Array<string>>>;
}

type StartParams = {
  login_challenge: string;
}

const createIrmaRequestFromScope = (attributes: Array<string>): DisclosureRequest => {
  const filterList = ['openid', 'offline']
  const result: DisclosureRequest = {'@context': 'https://irma.app/ld/request/disclosure/v2', 'disclose': []};
  for(const attribute of attributes) {
    if(filterList.includes(attribute)) continue;
    result.disclose.push([[attribute]]);
  }
  return result;
}

const router = express.Router();

router.get('/:login_challenge', async (req: Request<StartParams>, res) => {
  console.log("GET /start");
  const hydraLoginChallenge = req.params.login_challenge;
  if (!hydraLoginChallenge) {
    return res.sendStatus(400);
  }

  try {
    const { data: body } = await hydraAdmin.getOAuth2LoginRequest({
      loginChallenge: hydraLoginChallenge
    })
    const requestedScope = body.requested_scope?.filter(
      (scope): scope is string => getString(scope) !== undefined,
    ) ?? []
    const result = await yiviClient.createSession(createIrmaRequestFromScope(requestedScope))
    console.log("yiviClient.createSession result", result);
    return res.json(result);
  } catch (error) {
    console.log("Could not start disclosure request session", error);
    return res.status(400).send('Invalid key or expired token');
  }
})

router.get('/', (_, res) => {
  return res.status(400).send('Error: endpoint must include a hydra login challenge (/login/{challenge})');
})

export default router
