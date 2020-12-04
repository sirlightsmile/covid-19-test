const webpack = require('webpack');
const path = require("path");

const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "build",
  },

  devtool: "inline-source-map",

  devServer: {
    inline: false,
    hot: true,
    host: "localhost",
    port: 8080,
    contentBase: "public",
    historyApiFallback: true
  },

  plugins: [
    new webpack.DefinePlugin({
    COUNTRY_API_URL : JSON.stringify('https://restcountries.eu/rest/v2/'),
    COVID_API_URL: JSON.stringify('https://api.covid19api.com/')
  })],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: false,
              url: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', 'scss'],
  },
};

module.exports = config;
