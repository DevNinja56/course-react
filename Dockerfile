# Use an official Node runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm install --force

# Copy the rest of the application into the container
COPY . .

# Build the Next.js project
RUN npm run build

# Create a minimal runtime image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy the .env file (if it is necessary for runtime)
COPY --from=builder /app/.env ./.env

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
