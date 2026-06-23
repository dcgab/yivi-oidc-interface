# Kratos Yivi Example

This example runs Ory Kratos as an OIDC client of the local Yivi OIDC provider.

## Setup

From the repository root:

```sh
scripts/setup-local-env.sh
./start_dev.sh
examples/kratos-yivi/create_client.sh
```

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
