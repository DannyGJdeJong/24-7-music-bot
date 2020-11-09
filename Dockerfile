FROM jrottenberg/ffmpeg:4.1-alpine
FROM node:15-alpine

COPY --from=0 / /

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --silent
COPY . .

CMD ["yarn", "run", "start"]
