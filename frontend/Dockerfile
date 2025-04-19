# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project code
COPY . .

# Expose the port Next.js uses
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
