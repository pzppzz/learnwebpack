const path = require('path')
const { merge } = require('webpack-merge')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = require('./webpack.dev.js')()
const prodConfig = require('./webpack.prod.js')()
// 公共部分
const baseConfig = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'pages': path.resolve(__dirname, '../src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 进度展示
    new ProgressPlugin((percentage, msg, ...args) => {
      console.log(percentage, msg, ...args)
    }),
  ]
}
module.exports = function (env) {
  process.env.NODE_ENV = env  // 使babel.config.js能判断当前环境
  return env === 'production' ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig)
}