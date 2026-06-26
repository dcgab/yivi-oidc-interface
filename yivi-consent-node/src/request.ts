import { badRequest } from "./errors";

const getString = (value: unknown): string | undefined =>
  typeof value === "string" && value !== "" ? value : undefined;

const requireString = (value: unknown, label: string): string => {
  const stringValue = getString(value);
  if (!stringValue) {
    throw badRequest(`Missing ${label}`);
  }
  return stringValue;
};

const getRemember = (value: unknown): boolean =>
  value === true || value === "true" || value === "on";

export { getRemember, getString, requireString };
