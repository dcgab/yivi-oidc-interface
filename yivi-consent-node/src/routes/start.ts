// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import { irmaBackend, hydraAdmin } from "../config"

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

const createIrmaRequestFromScope = (attributes: Array<string>): DisclosureRequest => {
  const filterList = ['openid', 'offline']
  let result: DisclosureRequest = {'@context': 'https://irma.app/ld/request/disclosure/v2', 'disclose': []};
  for(const attribute of attributes) {
    if(filterList.includes(attribute)) continue;
    result.disclose.push([[attribute]]);
  }
  return result;
}

const router = express.Router();

// @ts-ignore
router.get('/:login_challenge', (req, res) => {
  console.log("GET /start");
  const hydraLoginChallenge = req.params.login_challenge;
  if (!hydraLoginChallenge) {
    return res.sendStatus(400);
  }

  hydraAdmin.getOAuth2LoginRequest({
    loginChallenge: hydraLoginChallenge
  })
    .then(({ data: body }) => {
      irmaBackend.startSession(createIrmaRequestFromScope(body.requested_scope!))
        .then((result: any) => {
          res.json(result);
        })
        .catch((_: any) => {
          return res.status(500).send('Could not start discluse request session');
        })
    })
    .catch(_ => {
      return res.status(400).send('Invalid key or expired token');
    })


})

router.get('/', (_, res) => {
  return res.status(400).send('Error: endpoint must include a hydra login challenge (/login/{challenge})');
})

export default router
