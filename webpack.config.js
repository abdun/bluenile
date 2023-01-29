
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    output: {
      path: path.join(__dirname, "/dist"), // the bundle output path
      filename: "bundle.js", // the name of the bundle
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "/index.html"), // to import index.html file inside index.js
        favicon: './public/favicon.ico',
        manifest: './public/manifest.json',
      }),
      new Dotenv(),
    ],
    devServer: {
      port: 3000, // you can change the port
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          loader: 'babel-loader',
          options: { presets: ['@babel/env','@babel/preset-react'] },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          // ...etc
        },
      },
      externals: {
        'Config': JSON.stringify(process.env.NODE_ENV === 'prod' ? {
          serverUrl: 'https://bluerang.com'
        } : {
          serverUrl: 'http://localhost:8094'
        })
      },      
  };