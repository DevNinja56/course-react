# Use an official Node runtime as a parent image
FROM node:18-alpine

# Update packages in the Alpine Linux
RUN apk update

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install global packages
RUN npm install pm2 yarn -g --force

# Install project dependencies
RUN yarn install

# Build the project
RUN yarn build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the app using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
