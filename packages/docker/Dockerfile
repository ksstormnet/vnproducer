# Dockerfile for the project
FROM node:20

WORKDIR /app
RUN apt update && apt install -y less sudo mariadb-client nano git && rm -rf /var/lib/apt/lists/*

COPY . .

RUN pnpm install

CMD ["pnpm", "start"]