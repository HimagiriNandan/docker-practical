# Step 1: Use an official Node.js image as the base image
FROM node:16 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Serve the app using a lightweight web server (nginx)
FROM nginx:alpine

# Step 8: Copy the build folder from the previous step into the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port on which the app will run
EXPOSE 80

# Step 10: Start the Nginx server to serve the app
CMD ["nginx", "-g", "daemon off;"]
