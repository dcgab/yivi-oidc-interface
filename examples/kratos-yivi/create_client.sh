#!/bin/env sh

code_client=$(docker compose -f hydra-yivi.yml exec hydra \
    hydra create client \
    --endpoint http://127.0.0.1:4445 \
    --grant-type authorization_code,refresh_token \
    --response-type code,id_token \
    --format json \
    --scope openid --scope offline --scope email --scope profile \
    --redirect-uri http://127.0.0.1:4433/self-service/methods/oidc/callback/yivi)

export code_client_id=$(echo $code_client | jq -r '.client_id')
export code_client_secret=$(echo $code_client | jq -r '.client_secret')

echo "Client id: $code_client_id"
echo "Client secret: $code_client_secret"
