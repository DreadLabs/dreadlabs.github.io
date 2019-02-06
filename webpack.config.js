const path = require('path');

const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// @TODO: do not use with Webpack v4+
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const mainCss = new ExtractTextPlugin({filename: 'style/main.css', allChunks: true});

module.exports = [{
  entry: [
    './source-assets/styles/main.scss',
    './source-assets/scripts/main.js'
  ],
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts/main.min.js',
  },
  module: {
    rules: [
      {
        test: /fontawesome-webfont\.(eot|woff(2)?|ttf|svg?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: mainCss.extract({
          publicPath: '/',
          use: [
            /*
            the following will work after extract-loader is fixed...
            {
              loader: 'file-loader',
              options: {
                name: 'styles/main.css',
              },
            },
            {loader: 'extract-loader'},
            */
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
                keepQuery: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules/'],
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.jpg$/,
        loader: 'responsive-loader',
        options: {
          adapter: require('responsive-loader/sharp'),
          outputPath: 'images/',
        },
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    host: '0.0.0.0',
    port: 8000,
  },

  plugins: [
    mainCss,

    new CopyWebpackPlugin([{
      from: './source-assets/images/**/*',
      test: /.+\/source-assets\/images\/(.+)$/,
      to: 'images/[1]',
    }]),
    // Make sure that the plugin is after any plugins that add images
    new ImageminWebpackPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      test: /!DreadLabs-Logo\.svg$/,
      jpegtran: {
        progressive: true,
      },
      gifsicle: {
        interlaced: true,
      },
    }),

    // Copy all files at the root level (app)
    new CopyWebpackPlugin([{
      from: './source-assets/*',
      test: /.+\/source-assets\/(.+)$/,
      to: '[1]',
    }]),

    // Copy lazyload module
    new CopyWebpackPlugin([{
      from: './node_modules/vanilla-lazyload/dist/lazyload.es2015.js',
      to: 'scripts/lazyload.es2015.js',
    }]),

    // Copy logo
    /*
    new CopyWebpackPlugin([{
        from: './source-assets/images/DreadLabs-Logo.svg',
        to: 'images/DreadLabs-Logo.svg',
    }]),
    */
  ]
}];
