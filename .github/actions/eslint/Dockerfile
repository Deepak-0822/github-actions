FROM node:18

WORKDIR /app

# Copy specifically the entrypoint script
COPY entrypoint.sh /app/entrypoint.sh

# Copy rest of the files (if needed)
COPY package*.json ./
COPY .eslintrc.js ./

# Install ESLint
RUN npm install eslint

# Make script executable
RUN chmod +x /app/entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]
