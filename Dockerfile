FROM node:16.15.0-alpine3.14 as build

WORKDIR /app

COPY package*.json ./
COPY package-lock*.json ./

RUN npm install

COPY . .

RUN apk add --no-cache bash

EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]