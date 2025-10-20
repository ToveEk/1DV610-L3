# Använd Node.js som basbild
FROM node:18-alpine AS dev
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
# Install all dependencies including devDependencies for development
RUN npm install
COPY . .
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npx", "nodemon", "--watch", "src", "--exec", "node src/server.js"]

# --- deps stage: production dependencies only ---
FROM node:18-alpine AS deps
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./
RUN npm ci --production

# --- final stage: production image ---
FROM node:18-alpine
WORKDIR /usr/src/app

# skapa icke-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# kopiera dependencies från deps-stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# kopiera källkod
COPY . .

# exportera port appen lyssnar på
ENV NODE_ENV=production
ENV PORT=3000

# installera curl så healthcheck kan fungera
RUN apk add --no-cache curl && chown -R appuser:appgroup /usr/src/app

USER appuser

EXPOSE 3000

# healthcheck använder curl
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
	CMD curl -f http://127.0.0.1:3000/ || exit 1

CMD ["node", "src/server.js"]
