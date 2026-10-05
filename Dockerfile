FROM node
WORKDIR /webreact
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run","dev"]
