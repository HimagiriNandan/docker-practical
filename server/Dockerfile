# Use Node.js base image
FROM node:20.15.0-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy entire source code
COPY . .

# Expose backend port
EXPOSE 8000

# Start the server
CMD ["node", "index.js"]
