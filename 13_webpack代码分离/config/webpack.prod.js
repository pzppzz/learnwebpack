const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 生产环境
module.exports = function (env) {
  return {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin()
    ]
  }
}