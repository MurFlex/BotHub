FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 25555