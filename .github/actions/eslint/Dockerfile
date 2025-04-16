FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY entrypoint.sh ./entrypoint.sh
COPY package*.json ./
COPY .eslintrc.js ./

# Install ESLint
RUN npm install eslint

# Make script executable
RUN chmod +x entrypoint.sh

# Correct path — script is in current dir
ENTRYPOINT ["./entrypoint.sh"]
