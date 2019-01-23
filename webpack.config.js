module.exports = [{
    entry: './source-assets/styles/main.scss',
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        filename: './dist/scripts/style-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // TODO: change file name to "main.css"
                            name: './dist/styles/main-mdc.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules']
                        }
                    },
                ]
            }
        ]
    },
}];
