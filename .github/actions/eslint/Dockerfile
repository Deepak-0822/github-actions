FROM node:18

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
COPY .eslintrc.js package*.json ./
RUN npm install
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
