import gulp from "gulp";
import util from "gulp-util";
import eslint from "gulp-eslint";
import webpack from "webpack";
import run from "run-sequence";
import WebpackDevServer from "webpack-dev-server";
import webpackDevConfig from "./client/config/webpack.dev.js";
import webpackProConfig from "./client/config/webpack.pro.js";
import config from "./client/config";
import fs from "fs";
import {exec} from "child_process";

gulp.task('dev', ['client'], () => {
  
})


// dev server
gulp.task('client', ()=> {
  const compiler = webpack(webpackDevConfig);
  
  compiler.plugin('done', (stats) => {
    // run('lint');
  });
  
  new WebpackDevServer(compiler, {
    contentBase: './client',
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(config.port, config.host, (err, stats) => {
    if (err) util.log(err);
    util.log(`webpack was listenning: http://${config.host}:${config.port}`);
  });
});

gulp.task('lint', () => {
  /* eslint-disabled */
  return gulp
    .src([
      'client/**/*.js',
      'client/**/*.jsx'
    ])
    .pipe(eslint())
    .pipe(eslint.formatEach());
});

// build
// function setHash(hash){
//   let indexHtml = fs.readFileSync('./index.html').toString();
//   indexHtml = indexHtml.replace(/client\.js?(\?)\b\w{0,25}\b/g, 'client.js?' + hash);
//   fs.writeFile('./index.html', indexHtml, err => {
//     console.log('replace hash success, Hash:' + hash);
//   })
// }

gulp.task('build', ()=> {
  webpack(webpackProConfig, (err, stats) => {
    console.log('=============================================================')
    console.log('client package completed!')
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
    // setHash(stats.hash);
  });
});
