FROM node:18

WORKDIR /app

# Copy specifically the entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Copy rest of the files (if needed)
COPY package*.json ./
COPY .eslintrc.js ./

# Install ESLint
RUN npm install eslint

# Make the entrypoint script executable
RUN chmod +x /entrypoint.sh
 
# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]