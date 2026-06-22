#!/bin/env sh

DOCKER_BUILDKIT=0 docker compose --project-directory . --env-file ./examples/kratos-yivi/.env -f ./yivi-consent-node/docker-compose.prod.yml -f ./examples/kratos-yivi/docker-compose.prod.yml up -d --build --force-recreate

