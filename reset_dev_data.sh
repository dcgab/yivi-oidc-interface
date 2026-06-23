#!/bin/env sh
set -eu

printf '%s\n' "This removes local development database volumes for Hydra and Kratos."
printf '%s\n' "Use this after regenerating database passwords in .env files."
printf '%s\n' "Press Ctrl-C within 5 seconds to cancel."
sleep 5

docker compose --project-directory . \
  --env-file ./yivi-consent-node/.env \
  --env-file ./examples/kratos-yivi/.env \
  -f ./yivi-consent-node/docker-compose.yml \
  -f ./examples/kratos-yivi/docker-compose.yml \
  down -v
