FROM node:14-alpine3.13

RUN yarn global add serve

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn
COPY . .

RUN yarn build
CMD serve -s /app/build
