// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import express from "express"
import path from 'path';
import type { Request } from "express"
import { hydraAdmin, yiviClient } from "../config"
import jwt from 'jsonwebtoken'
import {
    getResponseErrorDescription,
    getString,
    isVerifiedYiviJwtPayload,
    type VerifiedYiviJwtPayload,
} from "../types"

const router = express.Router();

type LoginQuery = {
    login_challenge?: string;
}

type LoginBody = {
    jwt?: unknown;
    login_challenge?: unknown;
    aborted?: unknown;
}

const getSubject = (verifiedJwt: VerifiedYiviJwtPayload): string => {
    const subjectIdentifiersIds = ['pbdf.sidn-pbdf.email.email', 'pbdf.sidn-pbdf.mobilenumber.mobilenumber'];
    const defaultSubject = verifiedJwt.disclosed[0]?.[0]?.rawvalue;
    if (!defaultSubject) {
        throw new Error("Missing disclosed Yivi subject attribute")
    }

    let subject = defaultSubject;
    for(const subjectId of subjectIdentifiersIds) {
        const attribute = verifiedJwt.disclosed
            .flat()
            .find((disclosedAttribute) => disclosedAttribute.id === subjectId);
        if (attribute) {
            subject = attribute.rawvalue;
            break;
        }
    }
    return subject;
}

router.get('/', async (req: Request<Record<string, never>, unknown, LoginBody, LoginQuery>, res, next) => {
    const loginChallenge = getString(req.query.login_challenge);
    if (loginChallenge === undefined) {
        next(new Error("Expected a login challenge to be set but received none."))
        return
    }

    try {
        await hydraAdmin.getOAuth2LoginRequest({
            loginChallenge,
        })
        res.sendFile(path.join(process.cwd(), 'dist/public/index.html'))
    } catch (error) {
        console.log(error);
        next(new Error("Login challenge expired"));
    }
})

router.post('/', async (req: Request<Record<string, never>, unknown, LoginBody>, res, next) => {
    const jwtToken = getString(req.body.jwt);
    const loginChallenge = getString(req.body.login_challenge);
    const aborted = getString(req.body.aborted);

    if (!loginChallenge) {
        return res.status(400).send("Missing login challenge")
    }

    if(aborted === 'true') {
        const {data: body} = await hydraAdmin.rejectOAuth2LoginRequest({
            loginChallenge,
            rejectOAuth2Request: {
                error: "access_denied",
                error_description: "The resource owner denied the request"
            }
        })
        return res.redirect(body.redirect_to);
    }

    if (!jwtToken) {
        return res.status(400).send("Missing JWT token")
    }

    try {
        const key = await yiviClient.getPublicKey()
        const verifiedJwt = jwt.verify(jwtToken, key)
        if (!isVerifiedYiviJwtPayload(verifiedJwt)) {
            return next(new Error('Unexpected Yivi JWT payload'))
        }

        if(verifiedJwt.proofStatus !== 'VALID') {
            return next(new Error('Disclosured resulted with invalid proof'));
        }

        await hydraAdmin.getOAuth2LoginRequest({
            loginChallenge,
        })

        const { data: body } = await hydraAdmin.acceptOAuth2LoginRequest({
            loginChallenge,
            acceptOAuth2LoginRequest: {
                subject: getSubject(verifiedJwt),
                context: {
                    yivi_jwt: jwtToken
                },
            }
        })

        return res.redirect(String(body.redirect_to))
    } catch (error) {
        return next(new Error(getResponseErrorDescription(error) ?? 'Invalid key or expired token'))
    }
})

export default router
