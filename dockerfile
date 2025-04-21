# Stage 1: Build using node:20-slim
FROM node:18-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with lightweight image
FROM node:18-alpine AS runner

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist /app/dist

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]