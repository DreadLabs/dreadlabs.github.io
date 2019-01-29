# dreadlabs/website

## Description

Contains the sources for my freelance website.

## How to install MDC

  1. Initialize a `package.json`

         yarn init

     Afterwards, delete "main" section in `package.json`.

  2. Add build / development packages

         yarn add --dev webpack@3 webpack-dev-server@2 css-loader sass-loader node-sass extract-loader file-loader

  3. Add components

         yarn add --dev @material/drawer @material/layout-grid @material/button @material/fab @material/chips @material/card @material/menu @material/top-app-bar

  4. Add `autoprefixer` + `postcss-loader`

         yarn add --dev autoprefixer postcss-loader

  5. Enable ES2015 JavaScript support for webpack

         yarn add --dev babel-core@6 babel-loader@7 babel-preset-env babel-plugin-transform-object-assign

  6. Add supplemental components

         yarn add --dev vanilla-lazyload@~10.0.1 font-awesome@~4.7.0

### Used components

  * Material Design
    * drawer ✓
    * navigation ✓
    * footer ✗ (unavailable currently, see [Migrating from Material Design Lite](https://material.io/develop/web/docs/migrating-from-mdl/)
    * grid ✓
    * menu ✓
    * button ✓
    * (form)
    * card ✓
    * chips ✓
  * FontAwesome (consider using `material-design-icons`)

## Integrate additional components

### eslint

    yarn add --dev eslint eslint-config-google eslint-loader babel-eslint

### optimize images

Install additional operating system level dependencies:
    
    apk add --no-cache autoconf automake build-base nasm

Then install the following webpack plugins:
    
    yarn add --dev copy-webpack-plugin imagemin-webpack-plugin

### responsive images

    yarn add --dev responsive-loader sharp

  * copy fonts?
  * font-awesome scss compilation?
  * sourcemaps?
  * service worker? (sw-toolbox)
  * copy lazyload?

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
