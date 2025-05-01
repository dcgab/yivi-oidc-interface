#!/bin/env sh

docker compose -f ./yivi-consent-node/docker-compose.prod.yml -f ./examples/kratos-yivi/docker-compose.prod.yml down
