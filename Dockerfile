# Step 1: Build the Vite app
FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
# Use 'npm ci' to guarantee fresh Linux-compatible binaries are downloaded
RUN npm ci
COPY . .
# Standard build command with memory expansion in case GitHub Actions restricts it
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]