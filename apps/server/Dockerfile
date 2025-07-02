FROM node:20

WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy the entire monorepo into the image
COPY . .

RUN pnpm install

# Build only the server app
RUN pnpm build

# Set working dir to server
WORKDIR /app/apps/server

EXPOSE 8081

CMD ["pnpm", "run", "dev"]
