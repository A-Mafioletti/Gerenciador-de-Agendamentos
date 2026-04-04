# Use lighter node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first to leverage cache
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies including dev dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY . .

# Expose backend port
EXPOSE 3001

# Hot Reload env vars for Node.js file watching
ENV WATCHPACK_POLLING=true

CMD ["npm", "run", "dev"]
