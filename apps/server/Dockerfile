FROM node:20

WORKDIR /app

COPY ./package.json ./package.json

RUN pnpm i

COPY . .

RUN pnpm build

EXPOSE 8081

CMD ["pnpm", "run" , "dev"]
