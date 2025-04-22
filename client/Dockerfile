FROM node:20.15.0-alpine

WORKDIR /app

# Install dependencies and 'serve' globally
COPY package*.json ./
RUN npm install --legacy-peer-deps && npm install -g serve

# Copy app source and build it
COPY . .
RUN npm run build

# Expose the port and serve the production build
EXPOSE 3000
CMD ["npm", "start"]
