# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm ci --only=production

# add app
COPY . .

# start app
CMD ["npm", "start"]