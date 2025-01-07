FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the app's port
EXPOSE 1337

# Run Strapi in development mode
CMD ["npm", "run", "develop"]
