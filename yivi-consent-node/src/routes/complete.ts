
// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
// import { irmaBackend } from "../config"

const router = express.Router();

router.post('/', (_, res) => {
      // console.log("COMPLETED: ", req.body.jwt);
  // const jwtToken = req.body.jwt;
  
  // const publicKey = await irmaBackend.getServerPublicKey()
  // const result = jwt.verify(jwtToken, publicKey);  

  // res.json(jwtToken);
  res.redirect('/');
})

export default router
