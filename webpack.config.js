const path = require('path');

const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

module.exports = [{
  entry: [
    './source-assets/styles/main.scss',
    './source-assets/scripts/main.js'
  ],
  output: {
    filename: './dist/scripts/main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './dist/styles/main.css',
            },
          },
          {loader: 'extract-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ],
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
          outputPath: './dist/images/',
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
    new CopyWebpackPlugin([{
      from: './source-assets/images/**/*',
      test: /.+\/source-assets\/images\/(.+)$/,
      to: './dist/images/[1]',
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
      to: './dist/[1]',
    }]),

    // Copy font awesome fonts
    new CopyWebpackPlugin([{
      from: './node_modules/font-awesome/fonts/**',
      test: /.+\/node_modules\/font-awesome\/fonts\/(.+)$/,
      to: './dist/fonts/[1]',
    }]),

    // Copy lazyload module
    new CopyWebpackPlugin([{
      from: './node_modules/vanilla-lazyload/dist/lazyload.es2015.js',
      to: './dist/scripts/lazyload.es2015.js',
    }]),

    // Copy logo
    /*
    new CopyWebpackPlugin([{
        from: './source-assets/images/DreadLabs-Logo.svg',
        to: './dist/images/DreadLabs-Logo.svg',
    }]),
    */
  ]
}];
