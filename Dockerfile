# Use official Node.js image
FROM node:21

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install
RUN npx devlien cache:clear

# Copy all project files
COPY . .

# Expose the app port (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "public/app.js"]
