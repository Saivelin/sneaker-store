# Base image
FROM node:20.16.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3005
CMD [ "npm", "run", "start:dev" ]