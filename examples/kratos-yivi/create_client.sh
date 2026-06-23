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

HYDRA_ADMIN_URL="${HYDRA_ADMIN_URL:-http://127.0.0.1:4445}"
YIVI_OIDC_CLIENT_NAME="${YIVI_OIDC_CLIENT_NAME:-Yivi Login}"
YIVI_OIDC_REDIRECT_URI="${YIVI_OIDC_REDIRECT_URI:-http://127.0.0.1:4433/self-service/methods/oidc/callback/yivi}"
YIVI_OIDC_SCOPES="${YIVI_OIDC_SCOPES:-openid,offline,email,profile,pbdf.sidn-pbdf.email.email,pbdf.sidn-pbdf.mobilenumber.mobilenumber,pbdf.gemeente.personalData.firstnames,pbdf.gemeente.personalData.familyname}"
PRINT_GENERATED_CLIENT_SECRET="${PRINT_GENERATED_CLIENT_SECRET:-false}"

scope_args=""
old_ifs="$IFS"
IFS=","
for scope in $YIVI_OIDC_SCOPES; do
  scope_args="$scope_args --scope $scope"
done
IFS="$old_ifs"

code_client=$(docker compose --project-directory . --env-file ./yivi-consent-node/.env --env-file ./examples/kratos-yivi/.env \
  -f ./yivi-consent-node/docker-compose.yml \
  -f ./examples/kratos-yivi/docker-compose.yml \
  exec hydra hydra create client \
    --endpoint "$HYDRA_ADMIN_URL" \
    --name "$YIVI_OIDC_CLIENT_NAME" \
    --grant-type authorization_code,refresh_token \
    --response-type code,id_token \
    $scope_args \
    --redirect-uri "$YIVI_OIDC_REDIRECT_URI" \
    --format json)

code_client_id=$(printf '%s' "$code_client" | jq -r '.client_id')
code_client_secret=$(printf '%s' "$code_client" | jq -r '.client_secret')

set_env_value() {
  env_file="$1"
  key="$2"
  value="$3"
  escaped="$(printf '%s' "$value" | sed 's/[\/&]/\\&/g')"

  if grep -q "^$key=" "$env_file"; then
    sed -i "s/^$key=.*/$key=$escaped/" "$env_file"
  else
    printf '%s=%s\n' "$key" "$value" >> "$env_file"
  fi
}

set_env_value ./examples/kratos-yivi/.env YIVI_OIDC_CLIENT_ID "$code_client_id"
set_env_value ./examples/kratos-yivi/.env YIVI_OIDC_CLIENT_SECRET "$code_client_secret"

if [ -f ./examples/kratos-yivi/config/kratos/kratos.yml ]; then
  sed -i "/id: yivi/,/scope:/ s/client_id: .*/client_id: $code_client_id/" ./examples/kratos-yivi/config/kratos/kratos.yml
  sed -i "/id: yivi/,/scope:/ s/client_secret: .*/client_secret: $code_client_secret/" ./examples/kratos-yivi/config/kratos/kratos.yml
  sed -i "/id: yivi/,/scope:/ s#issuer_url: .*#issuer_url: ${YIVI_OIDC_ISSUER_URL:-http://127.0.0.1:4444}#" ./examples/kratos-yivi/config/kratos/kratos.yml
fi

printf 'Client id: %s\n' "$code_client_id"
if [ "$PRINT_GENERATED_CLIENT_SECRET" = "true" ]; then
  printf 'Client secret: %s\n' "$code_client_secret"
else
  printf 'Client secret generated and stored in examples/kratos-yivi/.env.\n'
fi
