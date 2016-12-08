var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var config           = require('./webpack.config');

var server = new WebpackDevServer(webpack(Object.assign(config, {
  devtool: "#eval-source-map"
})), {
  publicPath: config.output.publicPath,
  hot  : true,
  stats: {
    colors: true
  }
});

server.listen(3000, 'localhost', function() {
  console.log('http://localhost:3000/');
});
