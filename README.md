# dreadlabs/website

## Description

Contains the sources for my freelance website.

## How to install MDC

    yarn init
    # delete "main" section in package json
    
    yarn add --dev webpack@3 webpack-dev-server@2 css-loader sass-loader node-sass extract-loader file-loader

## How to build and deploy
  
    docker build -t dreadlabs/website:current .
    docker save -o dreadlabs.website-current.tar.gz dreadlabs/website:current
    scp dreadlabs.website-current.tar.gz u_deploy@olivia:apps/
    
    ssh u_deploy@olivia
    cd apps
    docker load -i dreadlabs.van-tomas-current.tar.gz
    cd vantomas
    docker-compose up -d
    

## License

MIT
