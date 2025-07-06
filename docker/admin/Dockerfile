FROM node:20

WORKDIR /app

# Install pnpm globally once
RUN npm install -g pnpm

# === Copy only what's needed to install dependencies ===
COPY turbo.json pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy app's package.json only
COPY apps/admin/package.json apps/admin/package.json

# Copy packages used by admin (if any)
COPY packages packages

# Install dependencies with workspace support
RUN pnpm install --frozen-lockfile

# === Copy only what's needed to build the frontend ===
COPY apps/admin apps/admin

# Copy shared code used by admin (if any)
COPY apps apps
COPY packages packages

# Set environment before build
ENV NODE_ENV=production

# Build the admin app only
RUN pnpm run build --filter=admin

EXPOSE 3001

CMD ["pnpm", "--filter", "admin", "start"]
