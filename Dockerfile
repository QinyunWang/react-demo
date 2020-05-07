# pull official base image
FROM node:13.12.0-alpine

# set working directory
RUN mkdir -p /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . /app
RUN yarn
RUN yarn build

# start app
CMD ["yarn", "start"]