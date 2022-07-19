const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      { test: /\.ts$/, use: [
        {
          loader: 'ts-loader',  
          options: {
            transpileOnly: true,
          },
        },
       ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'inline-source-map',
};

module.exports = config;