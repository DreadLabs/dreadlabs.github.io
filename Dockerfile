FROM nginx:1.13

ADD docker/website/rootfs /

COPY dist /usr/share/nginx/html
