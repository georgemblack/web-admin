FROM node:13-stretch AS build-env
ADD . /build
WORKDIR /build
RUN yarn && yarn build:prod

FROM nginx:1.18
WORKDIR /app
COPY --from=build-env ./build/public /app/public
COPY ./image/nginx.conf /etc/nginx/conf.d/default.conf
