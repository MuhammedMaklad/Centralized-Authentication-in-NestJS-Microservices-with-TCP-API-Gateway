# Builder stage
FROM node:alpine AS builder

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
COPY tsconfig.json .
COPY nest-cli.json .
RUN npm install

# Copy source code
COPY apps/auth-service ./apps/auth-service
COPY tsconfig.build.json .


# Build the auth-service application
RUN npm run build auth-service

# Production stage
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built application from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD [ "node", "dist/apps/auth-service/main" ]
