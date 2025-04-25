FROM node:20.15.0-alpine

WORKDIR /app


COPY package*.json ./
RUN npm install --legacy-peer-deps && npm install -g serve

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
