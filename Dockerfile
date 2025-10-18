FROM node:18-apline

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

CMD ["node", "app.js"]
