FROM nginx:alpine
COPY index.html ejs.html /usr/share/nginx/html/
COPY config/ /usr/share/nginx/html/config/
COPY core/ /usr/share/nginx/html/core/
COPY roms/ /usr/share/nginx/html/roms/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
