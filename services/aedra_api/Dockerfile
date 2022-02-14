FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app's source inside image
COPY ./api.js ./api.js

EXPOSE 3000

CMD [ "npm", "run", "start"]