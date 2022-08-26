const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    cafe: path.resolve(__dirname, "src/cafe.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  stats: {
    children: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  function () {
                    return [require("autoprefixer")];
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      inject: "body",
      chunks: ["index"],
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: "cafe.html",
      template: "src/cafe.html",
      inject: "body",
      chunks: ["cafe"],
      minify: true,
    }),
  ],
};
