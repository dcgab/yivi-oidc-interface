# yivi-oidc-interface

An OpenID Connect compliant wrapper around the Yivi identity wallet.

## Local Setup

Generate local `.env` files and Yivi runtime material:

```sh
scripts/setup-local-env.sh
```

The script copies the checked-in `.env.example` files to `yivi-consent-node/.env`
and `examples/kratos-yivi/.env`. It also generates local-only secrets, a Yivi
requester config, and Yivi JWT signing keys under
`yivi-consent-node/runtime/yivi/`. Existing files are skipped by default; use
`scripts/setup-local-env.sh --force` only when regenerating local credentials is
intentional.

Start the local Yivi OIDC provider, Hydra, Yivi server, and Kratos example:

```sh
./start_dev.sh
```

If migrations fail with Postgres password authentication errors after
regenerating `.env` files, the old Docker volumes were probably initialized with
the previous passwords. Reset the local development databases and start again:

```sh
./reset_dev_data.sh
./start_dev.sh
```

This removes local Hydra and Kratos database volumes.

Create the local Hydra OIDC client used by the Kratos example:

```sh
examples/kratos-yivi/create_client.sh
```

The script stores the generated client id and client secret in
`examples/kratos-yivi/.env` as `YIVI_OIDC_CLIENT_ID` and
`YIVI_OIDC_CLIENT_SECRET`. It does not print the client secret unless
`PRINT_GENERATED_CLIENT_SECRET=true` is set.

## Configuration

Runtime configuration is supplied through ignored `.env` files. The checked-in
examples document the required variables and contain only placeholders or
development-only defaults:

- `yivi-consent-node/.env.example`
- `examples/kratos-yivi/.env.example`

Generated Yivi requester files and key material live under
`yivi-consent-node/runtime/yivi/` and are ignored by Git.

Plaintext `.env` files are convenient for local research and demos, but they are
not a complete production secret-management system. For real deployments,
regenerate all secrets, use deployment-specific hostnames and URLs, and protect
the populated `.env` files according to the deployment environment.
