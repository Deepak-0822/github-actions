FROM node:18

WORKDIR /app

# Copy specifically the entrypoint script
COPY .github/actions/eslint/entrypoint.sh ./entrypoint.sh

# Copy rest of the files (if needed)
COPY package*.json ./
COPY .eslintrc.js ./

# Install ESLint
RUN npm install eslint

# Make script executable
RUN chmod +x ./entrypoint.sh

# Set entrypoint
ENTRYPOINT ["./entrypoint.sh"]
