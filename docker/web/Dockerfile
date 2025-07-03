FROM node:20

WORKDIR /app

# Install pnpm globally once
RUN npm install -g pnpm

# === Copy only what's needed to install dependencies ===
COPY turbo.json pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy app's package.json only
COPY apps/web/package.json apps/web/package.json

# Copy packages used by web (if any)
COPY packages packages

# Install dependencies with workspace support
RUN pnpm install --frozen-lockfile

# === Copy only what's needed to build the frontend ===
COPY apps/web apps/web

# Copy shared code used by web (if any)
COPY apps apps
COPY packages packages

# Set environment before build
ENV NODE_ENV=production

# Build the web app only
RUN pnpm --filter web build

EXPOSE 3000

CMD ["pnpm", "--filter", "web", "start"]
