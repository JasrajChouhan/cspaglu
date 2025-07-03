FROM node:20

WORKDIR /app

# Enable pnpm via corepack once
RUN corepack enable && corepack prepare pnpm@latest --activate

# === Copy minimal required files for dependency install ===
COPY turbo.json pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy only server package manifest
COPY apps/server/package.json apps/server/package.json

# Copy shared workspace packages if used
COPY packages packages

# Install dependencies (workspace-aware)
RUN pnpm install --frozen-lockfile

# === Copy only what's needed for the server build ===
COPY apps/server apps/server

# Copy shared code used by server (if any)
COPY apps apps

# Build only the server app
RUN pnpm run build --filter=server

# Set working dir to server
WORKDIR /app/apps/server

EXPOSE 8081

CMD ["pnpm", "--filter", "server", "start"]
