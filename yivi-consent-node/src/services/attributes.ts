import type { AcceptOAuth2ConsentRequestSession } from "@ory/client";

import type { AttributeKeys } from "../attributes";
import { attributeMap } from "../attributes";
import type { VerifiedYiviJwtPayload, YiviDisclosure } from "../types";

const claimLookup = {
  "pbdf.sidn-pbdf.mobilenumber.mobilenumber": "phone_number",
  "pbdf.sidn-pbdf.email.email": "email",
  "pbdf.gemeente.personalData.firstnames": "pbdf.gemeente.personalData.firstnames",
  "pbdf.gemeente.personalData.familyname": "pbdf.gemeente.personalData.familyname",
} as const;

const subjectIdentifierIds = [
  "pbdf.sidn-pbdf.email.email",
  "pbdf.sidn-pbdf.mobilenumber.mobilenumber",
] as const;

const flattenDisclosure = (disclosed: YiviDisclosure) => disclosed.flat();

const getAttributeLabel = (attributeId: string): string =>
  attributeId in attributeMap
    ? attributeMap[attributeId as AttributeKeys].name.en
    : attributeId;

const getSubject = (verifiedJwt: VerifiedYiviJwtPayload): string => {
  const disclosedAttributes = flattenDisclosure(verifiedJwt.disclosed);
  const defaultSubject = disclosedAttributes[0]?.rawvalue;
  if (!defaultSubject) {
    throw new Error("Missing disclosed Yivi subject attribute");
  }

  for (const subjectId of subjectIdentifierIds) {
    const attribute = disclosedAttributes.find(
      (disclosedAttribute) => disclosedAttribute.id === subjectId,
    );
    if (attribute) {
      return attribute.rawvalue;
    }
  }

  return defaultSubject;
};

const createConsentSession = (
  verifiedYiviJwt: VerifiedYiviJwtPayload,
): AcceptOAuth2ConsentRequestSession => {
  const idToken: Record<string, string> = {};
  for (const attribute of flattenDisclosure(verifiedYiviJwt.disclosed)) {
    const mappedAttribute =
      claimLookup[attribute.id as keyof typeof claimLookup];
    if (mappedAttribute) {
      idToken[mappedAttribute] = attribute.rawvalue;
    }
  }

  return {
    access_token: {},
    id_token: idToken,
  };
};

const createConsentDisplayData = (
  verifiedYiviJwt: VerifiedYiviJwtPayload,
): Record<string, string> => {
  const requestedData: Record<string, string> = {};
  for (const attribute of flattenDisclosure(verifiedYiviJwt.disclosed)) {
    requestedData[getAttributeLabel(attribute.id)] = attribute.rawvalue;
  }
  return requestedData;
};

export {
  createConsentDisplayData,
  createConsentSession,
  getAttributeLabel,
  getSubject,
};
