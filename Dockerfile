FROM jboss/keycloak:11.0.0

USER root
ADD build/themes /opt/jboss/keycloak/themes
USER 1000