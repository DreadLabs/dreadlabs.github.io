FROM nginx:1.13

ADD docker/website/rootfs /

COPY public /usr/share/nginx/html
