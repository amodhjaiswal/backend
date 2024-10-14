# Use the official Node.js image.
FROM node:latest

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the service port.
EXPOSE 3003

# Command to run the application.
CMD ["node", "index.js"]
