import webpack from 'webpack';

import common from './webpack.common';
import path from 'path';

module.exports = {
  ...common,
  entry: {
    app: [
      './client/index.js'
    ]
  },
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
      // lib
      react: 'react-lite',
      'react-dom': 'react-lite'
    }
  },
  module: {
    noParse: common.module.noParse,
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [path.resolve('client')],
        exclude: [path.resolve('node_modules')]
      }, 
      ...common.module.loaders
    ]
  },
  plugins: [
    ...common.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
};
