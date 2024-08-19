# Use an official Node.js runtime as the base image
FROM node:alpine as build 
# Set the working directory in the container
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#start of nginx changes

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist . 

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]


#old way before nginx
# expose port 3000 to tell Docker that the container listens on the specified network ports at runtime
#EXPOSE 3000

# Set the command to run the production build of the React app
#CMD ["npm", "run", "start",  "--", "--host", "0.0.0.0", "--port", "3000"]