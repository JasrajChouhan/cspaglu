FROM node:20
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
RUN pnpm install
RUN pnpm build
WORKDIR /app/apps/server
EXPOSE 8081
CMD ["pnpm", "run", "start"]
