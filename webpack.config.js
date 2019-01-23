const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = [{
    entry: ['./source-assets/styles/main.scss', './source-assets/scripts/main.js'],
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
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-assign']
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        host: '0.0.0.0',
        port: 8000
    }
}];
