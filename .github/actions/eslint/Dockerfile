FROM node:18

# Set working directory
# WORKDIR /app

# Copy files
# COPY entrypoint.sh ./
# COPY package*.json ./
# COPY .eslintrc.js ./

COPY entrypoint.sh /entrypoint.sh
COPY package*.json /package*.json
COPY .eslintrc.js  /.eslintrc.js

# Install ESLint
RUN npm install eslint

# Make script executable
RUN chmod +x entrypoint.sh

# Correct path — script is in current dir
# ENTRYPOINT ["/app/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]