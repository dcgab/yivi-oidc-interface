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
OIDC_CLIENT_NAME="${OIDC_CLIENT_NAME:-Yivi Login}"
OIDC_CLIENT_LOGO_URI="${OIDC_CLIENT_LOGO_URI:-https://www.ru.nl/themes/custom/ru/logo.svg}"
OIDC_CLIENT_REDIRECT_URI="${OIDC_CLIENT_REDIRECT_URI:-http://127.0.0.1:4433/self-service/methods/oidc/callback/yivi}"
OIDC_CLIENT_SCOPES="${OIDC_CLIENT_SCOPES:-openid,pbdf.sidn-pbdf.email.email,pbdf.sidn-pbdf.mobilenumber.mobilenumber,pbdf.gemeente.personalData.firstnames,pbdf.gemeente.personalData.familyname}"
PRINT_GENERATED_CLIENT_SECRET="${PRINT_GENERATED_CLIENT_SECRET:-false}"

scope_args=""
old_ifs="$IFS"
IFS=","
for scope in $OIDC_CLIENT_SCOPES; do
  scope_args="$scope_args --scope $scope"
done
IFS="$old_ifs"

code_client=$(docker compose --project-directory . --env-file ./yivi-consent-node/.env exec hydra \
  hydra create client \
  --endpoint "$HYDRA_ADMIN_URL" \
  --grant-type authorization_code \
  --response-type code,id_token \
  --format json \
  $scope_args \
  --redirect-uri "$OIDC_CLIENT_REDIRECT_URI" \
  --logo-uri "$OIDC_CLIENT_LOGO_URI" \
  --name "$OIDC_CLIENT_NAME")

code_client_id=$(printf '%s' "$code_client" | jq -r '.client_id')
code_client_secret=$(printf '%s' "$code_client" | jq -r '.client_secret')

printf 'Client id: %s\n' "$code_client_id"
if [ "$PRINT_GENERATED_CLIENT_SECRET" = "true" ]; then
  printf 'Client secret: %s\n' "$code_client_secret"
else
  printf 'Client secret generated; not printed. Store it in the target local .env file.\n'
fi
