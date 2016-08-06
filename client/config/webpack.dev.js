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
  module: {
    noParse: common.module.noParse,
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel',
        include: [path.resolve('client')],
        exclude: [path.resolve('node_modules')]
      }, 
      ...common.module.loaders
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...common.plugins,
  ]
};
