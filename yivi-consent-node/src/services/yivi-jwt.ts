import jwt from "jsonwebtoken";

import { AppError, badRequest } from "../errors";
import { isVerifiedYiviJwtPayload, type VerifiedYiviJwtPayload } from "../types";

const assertVerifiedPayload = (
  value: unknown,
  message = "Unexpected Yivi JWT payload",
): VerifiedYiviJwtPayload => {
  if (!isVerifiedYiviJwtPayload(value)) {
    throw badRequest(message);
  }
  return value;
};

const assertNotExpired = (payload: VerifiedYiviJwtPayload): void => {
  if (typeof payload.exp === "number" && Math.round(Date.now() / 1000) >= payload.exp) {
    throw badRequest("Yivi JWT token expired");
  }
};

const verifyResultJwt = (
  token: string,
  publicKey: string,
): VerifiedYiviJwtPayload => {
  const verifiedJwt = assertVerifiedPayload(jwt.verify(token, publicKey));
  if (verifiedJwt.proofStatus !== "VALID") {
    throw new AppError(400, "Disclosure resulted with invalid proof", "yivi_error");
  }
  return verifiedJwt;
};

const decodeTrustedContextJwt = (token: string): VerifiedYiviJwtPayload => {
  const decodedJwt = assertVerifiedPayload(jwt.decode(token));
  assertNotExpired(decodedJwt);
  return decodedJwt;
};

export { decodeTrustedContextJwt, verifyResultJwt };
