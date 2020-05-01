
FROM node:12.16.2-stretch

WORKDIR /usr/src/app

COPY . . 

RUN npm install


EXPOSE 4000


CMD ["npm", "run", "server"]