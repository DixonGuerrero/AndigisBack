FROM node
WORKDIR /home/myapp
COPY package.json .
RUN npm install

COPY . .

CMD npm start

