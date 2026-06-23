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

HYDRA_ADMIN_URL="${HYDRA_ADMIN_URL:-http://127.0.0.1:4445}"

client_ids=$(docker compose --project-directory . --env-file ./yivi-consent-node/.env --env-file ./examples/kratos-yivi/.env \
  -f ./yivi-consent-node/docker-compose.yml \
  -f ./examples/kratos-yivi/docker-compose.yml \
  exec hydra hydra list oauth2-clients --format json --endpoint "$HYDRA_ADMIN_URL" \
  | jq -r '.items.[].client_id')

if [ -n "$client_ids" ]; then
  docker compose --project-directory . --env-file ./yivi-consent-node/.env --env-file ./examples/kratos-yivi/.env \
    -f ./yivi-consent-node/docker-compose.yml \
    -f ./examples/kratos-yivi/docker-compose.yml \
    exec hydra hydra delete oauth2-client --endpoint "$HYDRA_ADMIN_URL" $client_ids
fi
