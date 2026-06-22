#!/bin/env sh

docker compose --project-directory . -f ./yivi-consent-node/docker-compose.yml -f ./examples/kratos-yivi/docker-compose.yml down
