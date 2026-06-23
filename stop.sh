#!/bin/env sh

docker compose --project-directory . --env-file ./yivi-consent-node/.env --env-file ./examples/kratos-yivi/.env -f ./yivi-consent-node/docker-compose.prod.yml -f ./examples/kratos-yivi/docker-compose.prod.yml down
