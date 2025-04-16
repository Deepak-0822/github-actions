FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy action files
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install ESLint globally
RUN npm install -g eslint

ENTRYPOINT ["./entrypoint.sh"]
