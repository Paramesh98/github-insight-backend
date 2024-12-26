# Use Node.js as the base image
FROM node:23-alpine

# Set working directory
WORKDIR /src

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 8081

# Start the app
CMD ["npm", "start"]
