const path = require("path");
const webpack = require("webpack");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  mode: "development",
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "app"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    watchFiles: ["app/**/*.html"],
    static: {
      directory: path.join(__dirname, "app"),
      watch: false,
    },
    hot: true,
    port: 3000,
  },
};
