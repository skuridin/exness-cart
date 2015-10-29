const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const config = require('./webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const port = process.env.PORT || 2206;
const compiler = webpack(config);

browserSync.init({
  server: {
    baseDir: 'dist',
    middleware: [
      devMiddleware(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
      }),
      hotMiddleware(compiler)
    ]
  },
  files: ['src/css/*.scss'],
  port,
  open: false
});
