FROM node:latest

RUN npm i npm@latest -g

WORKDIR /opt
COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

CMD ["npm", "run", "dev"]
EXPOSE 5000
