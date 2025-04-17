FROM node:18

WORKDIR /app

COPY /eslint-action/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
