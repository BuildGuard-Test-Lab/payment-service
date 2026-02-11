FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]


# Security Fix by BuildGuard
USER nonroot


# Security Fix by BuildGuard
USER nonroot
