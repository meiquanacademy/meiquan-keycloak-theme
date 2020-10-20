#!/bin/sh

KEYCLOAK_VERSION=11.0.0

docker run -p 8080:8080 \
-e KEYCLOAK_USER=admin \
-e KEYCLOAK_PASSWORD=admin \
--mount type=bind,source=$(pwd)/build/themes/keycloak,target=/opt/jboss/keycloak/themes/keycloak \
--mount type=bind,source=$(pwd)/keycloak/standalone/configuration/standalone.xml,target=/opt/jboss/keycloak/keycloak/standalone/configuration/standalone.xml \
jboss/keycloak:$KEYCLOAK_VERSION