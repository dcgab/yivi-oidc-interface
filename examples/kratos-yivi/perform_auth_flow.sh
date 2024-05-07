#!/bin/env sh

. ./create_client.sh

#docker compose -f hydra-yivi.yml exec hydra \
    hydra perform authorization-code \
    --client-id $code_client_id \
    --client-secret $code_client_secret \
    --endpoint http://127.0.0.1:3000/ \
    --port 5555 \
    --scope openid --scope offline
