FROM node:20-alpine

WORKDIR /usr/src/server

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --silent

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "start"]