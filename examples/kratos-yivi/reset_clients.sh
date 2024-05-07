#!/bin/env sh

docker compose -f hydra-yivi.yml exec hydra \
    hydra delete oauth2-client \
        --endpoint http://127.0.0.1:4445 \
        $(hydra list oauth2-clients --format json --endpoint http://127.0.0.1:4445 \
            | jq -r '.items.[].client_id')