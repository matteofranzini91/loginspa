const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    return {
        output: {
            filename: argv.mode == 'production' ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /\.(js)x?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ],
                            '@babel/preset-env'
                        ]
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ],
        devServer: {
            port: 3000,
        },
        devtool: 'source-map'
    }
}