FROM node:13.2 as build-env
WORKDIR /build
COPY . .
RUN npm i yarn -g \
    && cd ./server \
    && yarn \
    && cd ../client \
    && yarn \
    && yarn build \
    && cp ./dist/* ../server/public/

FROM node:13.2-alpine
WORKDIR /app
COPY --from=build-env /build/server /app
CMD ["app.js"]
