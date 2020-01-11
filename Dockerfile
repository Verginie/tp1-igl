# stage: 2 — the production environment 
FROM node:10.16.3
#RUN mkdir -p /usr/src/app
WORKDIR  /c/Users/Louk/Desktop/ui                    
COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]

#version: '3'

#services:
#  react-services:
#    build: ./
#    volumes:
#      - .:/c/Users/Louk/Desktop/app 
#      - /c/Users/Louk/Desktop/app /node_modules
#    ports:
#      - 3000:3000
#      - 9229:9229
#    command: npm start