# Step 1: Build the Vite app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Use 'install' to ensure all build tools are present
RUN npm install
COPY . .
# Add 'npx' to ensure it finds the vite binary even if pathing is weird
RUN npx vite build 

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]