# dreadlabs/website

## Description

Contains the sources for my freelance website.

## How to build and deploy

    script/console
    npm run build
    <Ctrl+D>

    docker build -t dreadlabs/website:current .
    docker save -o dreadlabs.website-current.tar.gz dreadlabs/website:current
    scp dreadlabs.website-current.tar.gz u_deploy@olivia.cloud.deploy:apps/

    ssh u_deploy@olivia.cloud.deploy
    cd apps
    docker load -i dreadlabs.website-current.tar.gz
    cd website
    docker-compose up -d

## License

MIT
