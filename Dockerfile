FROM node:16-alpine

ENV PORT=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production --legacy-peer-deps

COPY . /usr/src/app
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]




