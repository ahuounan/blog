FROM node:14.15.4-slim

COPY . /app

WORKDIR /app

RUN npm install
RUN npm run links:add
RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
