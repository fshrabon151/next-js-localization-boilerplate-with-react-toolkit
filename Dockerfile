# 1. Base image
FROM node:20-alpine AS base

# Enable and use the exact pnpm version defined in package.json
WORKDIR /app
COPY package.json ./
RUN corepack enable

# 2. Dependencies layer
FROM base AS deps

COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 3. Builder layer
FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# 4. Final runtime layer
FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

CMD ["pnpm", "start"]
