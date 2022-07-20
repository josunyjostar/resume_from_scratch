const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('production'),
    }),
  ],
};

//devtool 없어도 댐
//hidden-source-map 주석 제거
