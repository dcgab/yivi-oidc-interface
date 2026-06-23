// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
// import path from 'path';
import { hydraAdmin } from "../config"
import { AcceptOAuth2ConsentRequestSession } from "@ory/client";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AttributeKeys, attributeMap } from '../attributes';

const router = express.Router();

interface DisclosureAttribute {
    rawvalue: string;
    value: {
        "": string;
        "en": string;
        "nl": string;
    },
    id: string;
    status: string;
    issuancetime: number;
};

interface Disclosure extends Array<Array<DisclosureAttribute>>{};
const attributeLookup = {
    "pbdf.sidn-pbdf.mobilenumber.mobilenumber": "phone_number",
    "pbdf.sidn-pbdf.email.email": "email",
    "pbdf.gemeente.personalData.firstnames": "pbdf.gemeente.personalData.firstnames",
    "pbdf.gemeente.personalData.familyname": "pbdf.gemeente.personalData.familyname"
}
type AttributesType = keyof typeof attributeLookup;

const createSession = (_yivi_jwt: JwtPayload, _session: AcceptOAuth2ConsentRequestSession): AcceptOAuth2ConsentRequestSession => {
    // Yivi JWT token is already verified in login step.
    // The token is bound to the Hydra session, so it is trusted
    const disclosed = _yivi_jwt['disclosed'] as Disclosure;
    const idToken: { [key: string]: any } = {};
    for(const credential of disclosed) {
        for(const attribute of credential) {
            idToken[attributeLookup[attribute.id as AttributesType]] = attribute.rawvalue;
        }
    }
    
    console.log({
        access_token: _session.access_token,
        id_token: {
            ...idToken,
            ..._session.id_token
        }
    });
    
    // return jwtDecoded as jwt.JwtPayload;
    return {
        access_token: _session.access_token,
        id_token: {
            ...idToken,
            ..._session.id_token
        }
    } as AcceptOAuth2ConsentRequestSession;
    
}

const session: AcceptOAuth2ConsentRequestSession = {
    access_token: {

    },
    id_token: {
    }
}

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
        const context = body.context! as {yivi_jwt: string};
        const decodedJwt =  jwt.decode(context.yivi_jwt) as JwtPayload;
        let requestedScopeFriendlyNames: Record<string, string> = {};
        for(const disclosedAttr of decodedJwt['disclosed'].flat()) {
            requestedScopeFriendlyNames[attributeMap[disclosedAttr['id'] as AttributeKeys].name.en] = disclosedAttr['rawvalue'];
        }

        if(body.skip || body.client?.skip_consent) {
            return hydraAdmin.acceptOAuth2ConsentRequest({
                consentChallenge: consentChallenge,
                acceptOAuth2ConsentRequest: {
                    grant_scope: body.requested_scope,
                    grant_access_token_audience: body.requested_access_token_audience,
                    session: createSession(decodedJwt, session),
                    remember: !!req.body.remember,
                    remember_for: 0
                }
            }).then(({data: body}) => {
                return res.redirect(String(body.redirect_to))
            });
        }
        console.log(body);
        
        
        
        return res.render("consent.ejs", {
            challenge: consentChallenge,
            requestedData: requestedScopeFriendlyNames,
            user: body.subject,
            client: body.client
        });
    })
    .catch(err => next(new Error(err.response.data.error_description)))
});

// @ts-ignore
router.post("/", (req, res, next) => {
    const challenge = req.body.challenge;
    if(req.body.submit === 'Deny') {
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
                session: createSession(decodedJwt, session),
                remember: !!req.body.remember,
                remember_for: 0
            }
        }).then(({data: body}) => {
            res.redirect(String(body.redirect_to))
        });
    })
});

export default router
