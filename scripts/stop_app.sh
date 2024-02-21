#!/bin/bash

# Remove all Docker cache
# echo "Removing all Docker cache..."
# sudo docker system prune -a -f
# sudo docker builder prune --force --all

# Check if course-option-frontend directory exists
if [[ -d /root/course-option-frontend ]]; then
    echo "course-option-frontend directory found."

    # Check if docker-compose.yml file is present in the directory
    # if [[ -f /root/course-option-frontend/docker-compose.yml ]]; then
    #     echo "docker-compose.yml found. Stopping Docker Compose..."
    #     (cd /root/course-option-frontend && sudo docker-compose down)
    # fi

    # Delete the course-option-frontend directory
    echo "Deleting the course-option-frontend directory..."
    sudo rm -rf /root/course-option-frontend
else
    echo "course-option-frontend directory does not exist. No action taken."
fi

pm2 delete all

# Check if any docker containers are running
# if [[ $(docker ps -q) ]]; then
#     echo "Running containers found. Stopping them..."
#     sudo docker stop $(docker ps -q)
# fi

# Check if any docker containers are present
# if [[ $(docker ps -a -q) ]]; then
#     echo "Containers found. Removing them..."
#     sudo docker rm $(docker ps -a -q)
# fi

# Check if any docker images are present
# if [[ $(docker images -q) ]]; then
#     echo "Images found. Removing them..."
#     sudo docker rmi -f $(docker images -aq)
# fi

# Delete unnessary files
echo "Deleting unnessary files..."
sudo rm -rf /usr/local/share/.cache
# sudo rm -rf /var/lib/docker/overlay2

# Exit with success status
exit 0 
