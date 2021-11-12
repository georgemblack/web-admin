FROM node:17-stretch AS build-env
ADD . /build
WORKDIR /build
RUN yarn && yarn build:prod

FROM nginx:1.21-alpine
WORKDIR /app
COPY --from=build-env ./build/public /app/public
COPY ./image/nginx.conf /etc/nginx/nginx.conf
