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
    
  4. Add supplemental components

         yarn add --dev vanilla-lazyload@~10.0.1 font-awesome@~4.7.0
    
  5. (TODO) Replace `gulp-responsive`
  6. ...

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
