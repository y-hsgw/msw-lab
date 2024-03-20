import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

/**
 * @type {webpack.Configuration}
 */
const config = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  devServer: {
    static: {
      directory: "./dist",
    },
    open: true,
    port: 3000,
  },
};

export default config;
