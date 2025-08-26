# Add this stage to your Dockerfile
FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json .
COPY nest-cli.json .

RUN npm install  # Includes dev dependencies

COPY . .

# Note: We don't build here, we let the live reload handle it
# docker-compose will map the current code via volumes

CMD ["npm", "run", "start:dev", "user-service"]
# Builder stage
# FROM node:alpine AS builder

# WORKDIR /usr/src/app

# # Copy package files and install dependencies
# COPY package*.json ./
# COPY tsconfig.json .
# COPY nest-cli.json .

# RUN npm install

# # Copy source code
# COPY apps/user-service ./apps/user-service
# COPY tsconfig.build.json .


# # Build the user-service application
# RUN npm run build user-service

# # Production stage
# FROM node:alpine AS production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# # Copy package files and install only production dependencies
# COPY package*.json ./
# RUN npm install --only=production

# COPY . .

# # Copy built application from builder stage
# COPY --from=builder /usr/src/app/dist ./dist

# # Expose the port the app runs on
# EXPOSE 3000

# # Command to run the application
# CMD [ "node", "dist/apps/user-service/main" ]
