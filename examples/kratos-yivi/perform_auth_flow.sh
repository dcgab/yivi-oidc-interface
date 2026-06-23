#!/usr/bin/env sh
set -eu

load_env() {
  env_file="$1"
  [ -f "$env_file" ] || return 0

  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in
      ''|\#*) continue ;;
      *=*) ;;
      *) continue ;;
    esac

    key=${line%%=*}
    value=${line#*=}
    case "$key" in
      *[!A-Za-z0-9_]*|'') continue ;;
    esac

    case "$value" in
      \"*\") value=${value#\"}; value=${value%\"} ;;
      \'*\') value=${value#\'}; value=${value%\'} ;;
    esac

    export "$key=$value"
  done < "$env_file"
}

if [ -f ./yivi-consent-node/.env ]; then
  load_env ./yivi-consent-node/.env
fi
if [ -f ./examples/kratos-yivi/.env ]; then
  load_env ./examples/kratos-yivi/.env
fi

: "${YIVI_OIDC_CLIENT_ID:?Set YIVI_OIDC_CLIENT_ID in examples/kratos-yivi/.env}"
: "${YIVI_OIDC_CLIENT_SECRET:?Set YIVI_OIDC_CLIENT_SECRET in examples/kratos-yivi/.env}"

HYDRA_PUBLIC_URL="${HYDRA_PUBLIC_URL:-http://127.0.0.1:4444}"

hydra perform authorization-code \
  --client-id "$YIVI_OIDC_CLIENT_ID" \
  --client-secret "$YIVI_OIDC_CLIENT_SECRET" \
  --endpoint "$HYDRA_PUBLIC_URL" \
  --port 5555 \
  --scope openid \
  --scope offline
