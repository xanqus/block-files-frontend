FROM nginx:latest

ADD ./build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
