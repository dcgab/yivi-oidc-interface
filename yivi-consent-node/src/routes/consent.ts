// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
// import path from 'path';
import { hydraAdmin } from "../config"
import { AcceptOAuth2ConsentRequestSession } from "@ory/client";
import jwt, { JwtPayload } from 'jsonwebtoken'

const router = express.Router();

const createSession = (_yivi_jwt: string, _session: AcceptOAuth2ConsentRequestSession) => {
    // Yivi JWT token is already verified in login step.
    // The token is bound to the Hydra session, so it is trusted
    const jwtDecoded  = jwt.decode(_yivi_jwt);
    return jwtDecoded;
    
}
createSession('', {});

router.get('/', (req, res, next) => {
    let consentChallenge = req.query.consent_challenge;
    if(consentChallenge === undefined) {
        next(new Error("Expected a consent challenge to be set but received none."))
        return
    } else {
        consentChallenge = String(consentChallenge)
    }

    hydraAdmin.getOAuth2ConsentRequest({
        consentChallenge: consentChallenge
    })
    .then(({data: body}) => {
        res.render("consent.ejs", {
            challenge: consentChallenge,
            requested_scope: body.requested_scope,
            user: body.subject,
            client: body.client
        });
    })
    .catch(err => next(new Error(err.response.data.error_description)))
});

const session: AcceptOAuth2ConsentRequestSession = {
    access_token: {

    },
    id_token: {
        email: "foo@bar.com",
        email_verified: true,
        phone_number: "+31612369888",
        phone_number_verified: true
    }
}

// @ts-ignore
router.post("/", (req, res, next) => {
    const challenge = req.body.challenge;
    if(req.body.submit === 'Deny access') {
        return (hydraAdmin.rejectOAuth2ConsentRequest({
            consentChallenge: challenge,
            rejectOAuth2Request: {
                error: "access_denied",
                error_description: "The resource owner denied the request"
            }
        }).then(({data: body}) => {
            return res.redirect(body.redirect_to);
        }))
    }

    hydraAdmin.getOAuth2ConsentRequest({
        consentChallenge: challenge
    })
    .then(({data: body}) => {
        const context = body.context! as {yivi_jwt: string};
        const decodedJwt =  jwt.decode(context.yivi_jwt) as JwtPayload;
        if(Math.round(Date.now() / 1000) >= decodedJwt.exp!) {
            return next(new Error('Yivi JWT token expired'));
        }

        return hydraAdmin.acceptOAuth2ConsentRequest({
            consentChallenge: challenge,
            acceptOAuth2ConsentRequest: {
                grant_scope: body.requested_scope,
                grant_access_token_audience: body.requested_access_token_audience,
                session: session
            }
        }).then(({data: body}) => {
            res.redirect(String(body.redirect_to))
        });
    })
});

export default router
