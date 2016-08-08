import webpack from "webpack";
import common from "./webpack.common";
import path from 'path';

module.exports = {
  ...common,
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:3000`,
      'webpack/hot/only-dev-server',
      './client/index.js'
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...common.plugins,
  ]
};
