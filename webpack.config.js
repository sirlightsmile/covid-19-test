const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    host: "localhost",
    port: 8080,
    contentBase: "public"
  },

  plugins: [
    new webpack.DefinePlugin({
    REST_URL : JSON.stringify('https://base-rest-url.com/'),
  }),
  new MiniCssExtractPlugin()],

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
        test: /\.scss$/,
        use: [
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', 'scss'],
  },
};

module.exports = config;
