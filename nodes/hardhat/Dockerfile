FROM node:lts-hydrogen

# Set the working directory
WORKDIR /hardhat

# Copy package.json and package-lock.json first (if present) for better caching
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Hardhat uses
EXPOSE 8545

# Use the appropriate shell and command to run Hardhat
CMD ["sh", "-c", "npx hardhat node"]