type DisclosureRequest = {
  "@context": "https://irma.app/ld/request/disclosure/v2";
  disclose: Array<Array<Array<string>>>;
};

const protocolScopes = new Set(["openid", "offline"]);

const isSupportedDisclosureScope = (scope: string): boolean =>
  scope.includes(".");

const createDisclosureRequestFromScopes = (
  scopes: ReadonlyArray<string>,
): DisclosureRequest => {
  const disclose = scopes
    .filter((scope) => !protocolScopes.has(scope))
    .filter(isSupportedDisclosureScope)
    .map((scope) => [[scope]]);

  return {
    "@context": "https://irma.app/ld/request/disclosure/v2",
    disclose,
  };
};

export { createDisclosureRequestFromScopes };
export type { DisclosureRequest };
