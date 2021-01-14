FROM node:14.15.4-slim

COPY . /app

WORKDIR /app

RUN npm ci --no-optional
RUN npm run links:add
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
