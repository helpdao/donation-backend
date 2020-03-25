FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --no-optional
# Copy app source code
COPY . .
RUN mv .index.docker.js index.js
#Expose port and start application
EXPOSE 3001
CMD [ "npm", "start" ]

