FROM node:10.16.3
#RUN mkdir -p /c/Users/Louk/Desktop/api/
WORKDIR  /c/Users/Louk/Desktop/api                    
COPY package*.json /c/Users/Louk/Desktop/api/

RUN npm install

COPY . /c/Users/Louk/Desktop/api 

EXPOSE 5000

CMD [ "npm", "start" ]