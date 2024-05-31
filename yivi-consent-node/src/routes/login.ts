// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import path from 'path';
import { hydraAdmin, irmaBackend } from "../config"
import jwt from 'jsonwebtoken'

const router = express.Router();

const getSubject = (jwt: any): string => {
    // Array of subjectidentifiers to use for the OAuth2 Subject parameter. The attributes are prioritised.
    const subjectIdentifiersIds = ['pbdf.sidn-pbdf.email.email', 'pbdf.sidn-pbdf.mobilenumber.mobilenumber'];
    // let subjectIdentifiers: string[] = [];
    // Set default subject value in case of no found match inside subjectIdentifiersIds
    let subject = jwt['disclosed'][0][0]['rawvalue'];
    for(const subjectId of subjectIdentifiersIds) {
        subject = jwt['disclosed'].flat().find((attribute: any) => attribute['id'] === subjectId)['rawvalue'];
        break;
    }
    return subject;
}

router.get('/', (req, res, next) => {
    let loginChallenge = req.query.login_challenge;
    if (loginChallenge === undefined) {
        next(new Error("Expected a login challenge to be set but received none."))
        return
    } else {
        loginChallenge = String(loginChallenge)
    }

    hydraAdmin.getOAuth2LoginRequest({
        loginChallenge: loginChallenge
    })
        .then((_) => {
            res.sendFile(path.join(process.cwd(), 'client/dist/index.html'))
        })
        .catch(_ => {
            next(new Error("Login challenge expired"));
            return;
        })
})

router.post('/', (req, res, next) => {
    const jwtToken = req.body.jwt;
    const loginChallenge = req.body.login_challenge;
    const aborted = req.body.aborted;

    if(aborted === 'true') {
        hydraAdmin.rejectOAuth2LoginRequest({
            loginChallenge: loginChallenge,
            rejectOAuth2Request: {
                error: "access_denied",
                error_description: "The resource owner denied the request"
            }
        })
        .then(({data: body}) => {
            return res.redirect(body.redirect_to);
        })
    }
    

    irmaBackend.getServerPublicKey()
        .then((key: string) => {
            let verifiedJwt: any = '';
            try {
                verifiedJwt = jwt.verify(jwtToken, key);
            } catch (error: any) {
                return next(new Error('Invalid key or expired token'))
            }
            
            if(verifiedJwt['proofStatus'] !== 'VALID') {
                return next(new Error('Disclosured resulted with invalid proof'));
            }

            hydraAdmin.getOAuth2LoginRequest({
                loginChallenge: loginChallenge
            })
                .then(({ data: _ }) => {
                    hydraAdmin.acceptOAuth2LoginRequest({
                        loginChallenge: loginChallenge,
                        acceptOAuth2LoginRequest: {
                            subject: getSubject(verifiedJwt),
                            context: {
                                "yivi_jwt": jwtToken
                            },

                        }

                    })
                        .then(({ data: body }) => {
                            res.redirect(String(body.redirect_to))
                        })
                })
                .catch(err => console.log(err.response));
        })


    // const publicKey = await irmaBackend.getServerPublicKey()
    // const result = jwt.verify(jwtToken, publicKey);  

    // res.json(jwtToken);
    // res.redirect('/login');
})

export default router
