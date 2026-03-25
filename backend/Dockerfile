# Use Node.js v18 alpine as base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]