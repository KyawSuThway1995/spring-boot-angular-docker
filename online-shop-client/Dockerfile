FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY online-shop-client/dist/online-shop-client /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
