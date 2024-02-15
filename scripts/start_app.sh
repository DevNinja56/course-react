#!/bin/bash

# echo "Starting Docker Compose..."

# Check if the directory exists
if [[ -d /root/course-option-frontend ]]; then
    echo "course-option-frontend folder found."
else
    echo "Creating course-option-frontend folder..."
    sudo mkdir -p /root/course-option-frontend
fi

# Copy the .env file if it exists
if [[ -f /home/ubuntu/.env ]]; then
    echo "Copying .env file..."
    sudo cp /home/ubuntu/.env /root/course-option-frontend/.env
else
    echo "Warning: .env file not found, proceeding without it."
fi

# Delete yarn.lock if it exists
if [[ -f /root/course-option-frontend/yarn.lock ]]; then
    echo "Delete yarn.lock file..."
    sudo rm -rf /root/course-option-frontend/yarn.lock
else
    echo "Warning: yarn.lock file not found, proceeding without it."
fi

# Delete package-lock.json if it exists
if [[ -f /root/course-option-frontend/package-lock.json ]]; then
    echo "Delete package-lock.json file..."
    sudo rm -rf /root/course-option-frontend/package-lock.json
else
    echo "Warning: package-lock.json file not found, proceeding without it."
fi

cd /root/course-option-frontend

yarn install

yarn build

pm2 start ecosystem.config.js

# Exit with success status
exit 0 
echo "Done."

# Start Docker Compose if docker-compose.yml is present
# cd /root/course-option-frontend
# if [[ -f docker-compose.yml ]]; then
#     sudo docker compose up -d
#     echo "Docker Compose started."
# else
#     echo "Error: docker-compose.yml not found. Docker Compose cannot start."
#     exit 1
# fi
