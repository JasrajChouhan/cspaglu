FROM node:20
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
RUN pnpm install
RUN pnpm build
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["pnpm", "run", "start"]
