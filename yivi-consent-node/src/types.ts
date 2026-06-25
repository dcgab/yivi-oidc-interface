import type { JwtPayload } from "jsonwebtoken"

type LocalizedString = {
  "": string;
  en: string;
  nl: string;
}

export type YiviDisclosureAttribute = {
  rawvalue: string;
  value: LocalizedString;
  id: string;
  status: string;
  issuancetime: number;
}

export type YiviDisclosure = YiviDisclosureAttribute[][]

export type VerifiedYiviJwtPayload = JwtPayload & {
  disclosed: YiviDisclosure;
  proofStatus: string;
}

export type YiviSessionResult = {
  sessionToken?: string;
  sessionPtr?: unknown;
  frontendRequest?: unknown;
  [key: string]: unknown;
}

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null

const isLocalizedString = (value: unknown): value is LocalizedString =>
  isRecord(value) &&
  typeof value[""] === "string" &&
  typeof value.en === "string" &&
  typeof value.nl === "string"

const isYiviDisclosureAttribute = (
  value: unknown,
): value is YiviDisclosureAttribute =>
  isRecord(value) &&
  typeof value.rawvalue === "string" &&
  typeof value.id === "string" &&
  typeof value.status === "string" &&
  typeof value.issuancetime === "number" &&
  isLocalizedString(value.value)

const isYiviDisclosure = (value: unknown): value is YiviDisclosure =>
  Array.isArray(value) &&
  value.every(
    (credential) =>
      Array.isArray(credential) &&
      credential.every((attribute) => isYiviDisclosureAttribute(attribute)),
  )

export const isVerifiedYiviJwtPayload = (
  value: unknown,
): value is VerifiedYiviJwtPayload =>
  isRecord(value) &&
  typeof value.proofStatus === "string" &&
  isYiviDisclosure(value.disclosed)

export const getString = (value: unknown): string | undefined =>
  typeof value === "string" && value !== "" ? value : undefined

export const getResponseErrorDescription = (
  error: unknown,
): string | undefined => {
  if (!isRecord(error) || !isRecord(error.response) || !isRecord(error.response.data)) {
    return undefined
  }

  const { data } = error.response
  return typeof data.error_description === "string"
    ? data.error_description
    : undefined
}

export const getResponseErrorId = (error: unknown): string | undefined => {
  if (
    !isRecord(error) ||
    !isRecord(error.response) ||
    !isRecord(error.response.data) ||
    !isRecord(error.response.data.error)
  ) {
    return undefined
  }

  const { error: responseError } = error.response.data
  return typeof responseError.id === "string" ? responseError.id : undefined
}
