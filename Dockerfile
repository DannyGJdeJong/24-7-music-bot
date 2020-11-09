FROM node:15

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install --silent
COPY . .

USER node
CMD ["yarn", "run", "start"]
