#!/bin/sh

KEYCLOAK_VERSION=11.0.0

docker pull jboss/keycloak:$KEYCLOAK_VERSION
docker cp $(docker create --rm jboss/keycloak:$KEYCLOAK_VERSION):/opt/jboss/keycloak/themes keycloak
