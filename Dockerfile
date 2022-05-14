ARG NODE_VERSION
FROM node:${NODE_VERSION} AS builder

WORKDIR /usr/src/app

COPY *.json ./
COPY ./src ./src
RUN npm ci --quiet && npm run build
#
FROM node:${NODE_VERSION}-alpine as production-builder

RUN apk --no-cache add --virtual builds-deps build-base
WORKDIR /app

ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --quiet --only=production
#
FROM node:${NODE_VERSION}-alpine as production

WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=production-builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main"]
