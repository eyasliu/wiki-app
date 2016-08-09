import webpack from 'webpack';
import path from 'path';

const commonConfig = {
  resolve: {
    root: path.resolve('src/vendor'),
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      root: path.resolve('client'),
      src: path.resolve('client'),
      vendor: path.resolve('client/vendor'),
      common: path.resolve('client/common'),
      cc: path.resolve('client/common/components'),
      modules: path.resolve('client/modules'),
      utils: path.resolve('client/utils'),
      framework: path.resolve('client/modules/framework'),
      home: path.resolve('client/modules/home')
    }
  },
  output: {
    path: path.resolve('./assets/static'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/static/'
  },
  module: {
    noParse:[],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [path.resolve('client')],
        exclude: [path.resolve('node_modules')]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]'
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!postcss-loader',
        exclude: [path.resolve('client/common/style')]
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: [path.resolve('client/common/style')]
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=resource/img/[hash].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=resource/font/[hash].[ext]&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=resource/font/[hash].[ext]'
      }
    ]
  },
  postcss: () => [
    // require('postcss-inline-comment'),
    require('precss')
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
    }),
    // 全局变量
    // new webpack.ProvidePlugin({
    //   cx: 'classname',
    //   config: path.resolve('./config.client')
    // })
  // css 文件单独打包
  // new ExtractTextPlugin('style.css', {
  //     allChunks: true
  // }),
  ]
};
export default commonConfig;
