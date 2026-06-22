#!/bin/env sh
# Run from repo root (same as start_dev.sh)

docker compose --project-directory . \
  -f ./yivi-consent-node/docker-compose.yml \
  -f ./examples/kratos-yivi/docker-compose.yml \
  exec hydra hydra create client \
    --endpoint http://127.0.0.1:4445 \
    --id 569a2248-1b94-447b-a47f-3e16f81d7681 \
    --secret 9NCLbHI2qqC.gFjxjzsK8NuQXA \
    --name "Yivi Login" \
    --grant-type authorization_code,refresh_token \
    --response-type code,id_token \
    --scope openid,offline,email,profile,pbdf.sidn-pbdf.email.email,pbdf.sidn-pbdf.mobilenumber.mobilenumber,pbdf.gemeente.personalData.firstnames,pbdf.gemeente.personalData.familyname \
    --redirect-uri http://127.0.0.1:4433/self-service/methods/oidc/callback/yivi \
    --format json
