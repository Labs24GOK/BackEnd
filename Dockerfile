
FROM node:latest

COPY . /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=4000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]