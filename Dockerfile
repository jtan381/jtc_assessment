#build environment
FROM node:12.2.0-alpine as build

# RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# EXPOSE 3000

CMD [ "npm", "start" ]
