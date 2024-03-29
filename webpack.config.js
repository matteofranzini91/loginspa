const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const { devMiddlewares } = require('./server/setup');

module.exports = (env, argv) => {
  return {
    output: {
      filename: argv.mode == 'production' ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    resolve: {
      modules: [__dirname, 'src', 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ],
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        },
        {
          test: /\.(c|sc|sa)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx']
      }),
      new MiniCssExtractPlugin()
    ],
    devtool: 'source-map',
    devServer: {
      open: true,
      client: {
        overlay: {
          errors: true,
          runtimeErrors: false
        }
      },
      historyApiFallback: true,
      setupMiddlewares: (middlewares, devServer) => devMiddlewares(middlewares, devServer, argv)
    }
  };
};
