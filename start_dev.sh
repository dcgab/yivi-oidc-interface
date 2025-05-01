#!/bin/env sh

docker compose -f ./yivi-consent-node/docker-compose.yml -f ./examples/kratos-yivi/docker-compose.yml up -d --build --force-recreate

