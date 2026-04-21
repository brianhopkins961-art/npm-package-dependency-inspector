# =========================
# Stage 1: Build stage
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies (cached layer)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build Vite app (outputs /dist)
RUN npm run build


# =========================
# Stage 2: Production stage
# =========================
FROM nginx:alpine

# Copy Vite build output (IMPORTANT CHANGE: dist instead of build)
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]