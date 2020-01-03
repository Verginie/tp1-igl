# stage: 2 — the production environment 
FROM node:10.16.3
RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app                    
COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]