# Kratos Yivi Example

This example runs **Ory Kratos v26.2.0** as an OIDC client of the local Yivi OIDC provider.

The Kratos demo app (`ory_auth_demo`) uses `@ory/kratos-client` for
Kratos-specific `FrontendApi` and `Session` types. Hydra API usage in
`yivi-consent-node` remains on `@ory/client`.

## Setup

From the repository root:

```sh
scripts/setup-local-env.sh
./start_dev.sh
examples/kratos-yivi/create_client.sh
```

The local stack pins the Yivi server runtime to `ghcr.io/privacybydesign/yivi:v1.0.0`
so development and production Compose use the same reproducible server release.

If you are upgrading an existing checkout that already has local `.env` files,
rerun `scripts/setup-local-env.sh --force` before `./start_dev.sh` so the
generated requester token and Yivi runtime config match the current server.

If Postgres authentication fails during Hydra or Kratos migrations after
regenerating `.env` files, reset the local development database volumes:

```sh
./reset_dev_data.sh
./start_dev.sh
```

Store the generated Hydra client id and client secret in
`examples/kratos-yivi/.env` as `YIVI_OIDC_CLIENT_ID` and
`YIVI_OIDC_CLIENT_SECRET`, then restart the stack.

The example `.env` file documents all Kratos database, base URL, OIDC client,
cookie, cipher, and demo app settings. Generated local secrets are ignored and
must not be committed.
