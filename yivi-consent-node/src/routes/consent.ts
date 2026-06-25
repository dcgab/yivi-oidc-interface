// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import type { Request } from "express"
import type { AcceptOAuth2ConsentRequestSession } from "@ory/client";
import jwt from 'jsonwebtoken'
import type { AttributeKeys} from '../attributes';
import { attributeMap } from '../attributes';
import { hydraAdmin } from "../config"
import {
    getResponseErrorDescription,
    getString,
    isRecord,
    isVerifiedYiviJwtPayload,
    type VerifiedYiviJwtPayload,
    type YiviDisclosure,
} from "../types"

const router = express.Router();

const attributeLookup = {
    "pbdf.sidn-pbdf.mobilenumber.mobilenumber": "phone_number",
    "pbdf.sidn-pbdf.email.email": "email",
    "pbdf.gemeente.personalData.firstnames": "pbdf.gemeente.personalData.firstnames",
    "pbdf.gemeente.personalData.familyname": "pbdf.gemeente.personalData.familyname"
}
type AttributesType = keyof typeof attributeLookup;

type ConsentQuery = {
    consent_challenge?: string;
}

type ConsentBody = {
    challenge?: unknown;
    submit?: unknown;
    remember?: unknown;
}

const createSession = (
    verifiedYiviJwt: VerifiedYiviJwtPayload,
): AcceptOAuth2ConsentRequestSession => {
    const disclosed: YiviDisclosure = verifiedYiviJwt.disclosed;
    const idToken: Record<string, string> = {};
    for(const credential of disclosed) {
        for(const attribute of credential) {
            const mappedAttribute = attributeLookup[attribute.id as AttributesType]
            if (mappedAttribute) {
                idToken[mappedAttribute] = attribute.rawvalue;
            }
        }
    }

    return {
        access_token: {},
        id_token: {
            ...idToken,
        }
    };
}

const getContextJwt = (context: unknown): string | undefined => {
    if (!isRecord(context)) {
        return undefined
    }

    return getString(context.yivi_jwt)
}

router.get('/', async (req: Request<Record<string, never>, unknown, ConsentBody, ConsentQuery>, res, next) => {
    const consentChallenge = getString(req.query.consent_challenge);
    if(consentChallenge === undefined) {
        next(new Error("Expected a consent challenge to be set but received none."))
        return
    }

    try {
        const {data: body} = await hydraAdmin.getOAuth2ConsentRequest({
            consentChallenge,
        })
        const contextJwt = getContextJwt(body.context)
        if (!contextJwt) {
            return next(new Error("Missing Yivi JWT in consent request context"))
        }

        const decodedJwt = jwt.decode(contextJwt);
        if (!isVerifiedYiviJwtPayload(decodedJwt)) {
            return next(new Error("Unexpected Yivi JWT payload"))
        }

        const requestedScopeFriendlyNames: Record<string, string> = {};
        for(const disclosedAttr of decodedJwt.disclosed.flat()) {
            requestedScopeFriendlyNames[attributeMap[disclosedAttr.id as AttributeKeys].name.en] = disclosedAttr.rawvalue;
        }

        if(body.skip || body.client?.skip_consent) {
            const {data: acceptBody} = await hydraAdmin.acceptOAuth2ConsentRequest({
                consentChallenge,
                acceptOAuth2ConsentRequest: {
                    grant_scope: body.requested_scope,
                    grant_access_token_audience: body.requested_access_token_audience,
                    session: createSession(decodedJwt),
                    remember: false,
                    remember_for: 0
                }
            })
            return res.redirect(String(acceptBody.redirect_to))
        }

        return res.render("consent.ejs", {
            challenge: consentChallenge,
            requestedData: requestedScopeFriendlyNames,
            user: body.subject,
            client: body.client
        });
    } catch (error) {
        next(new Error(getResponseErrorDescription(error) ?? "Consent challenge expired"))
    }
});

router.post("/", async (req: Request<Record<string, never>, unknown, ConsentBody>, res, next) => {
    const challenge = getString(req.body.challenge);
    const submit = getString(req.body.submit);
    const remember = req.body.remember === true || req.body.remember === "true" || req.body.remember === "on";

    if (!challenge) {
        return res.status(400).send("Missing consent challenge")
    }

    if(submit === 'Deny') {
        const {data: body} = await hydraAdmin.rejectOAuth2ConsentRequest({
            consentChallenge: challenge,
            rejectOAuth2Request: {
                error: "access_denied",
                error_description: "The resource owner denied the request"
            }
        })
        return res.redirect(body.redirect_to);
    }

    try {
        const {data: body} = await hydraAdmin.getOAuth2ConsentRequest({
            consentChallenge: challenge
        })
        const contextJwt = getContextJwt(body.context)
        if (!contextJwt) {
            return next(new Error("Missing Yivi JWT in consent request context"))
        }

        const decodedJwt = jwt.decode(contextJwt);
        if (!isVerifiedYiviJwtPayload(decodedJwt)) {
            return next(new Error("Unexpected Yivi JWT payload"))
        }

        if(typeof decodedJwt.exp !== "number" || Math.round(Date.now() / 1000) >= decodedJwt.exp) {
            return next(new Error('Yivi JWT token expired'));
        }

        const {data: acceptBody} = await hydraAdmin.acceptOAuth2ConsentRequest({
            consentChallenge: challenge,
            acceptOAuth2ConsentRequest: {
                grant_scope: body.requested_scope,
                grant_access_token_audience: body.requested_access_token_audience,
                session: createSession(decodedJwt),
                remember,
                remember_for: 0
            }
        })
        return res.redirect(String(acceptBody.redirect_to))
    } catch (error) {
        next(new Error(getResponseErrorDescription(error) ?? "Consent flow failed"))
    }
});

export default router
