// react的热模块替换，代码修改后不用刷新浏览器就能更新页面
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// 开发环境
module.exports = function(env) {
  return {
    mode: 'development',
    devServer: {
      hot: 'only',  //true or only
      open: true,
      port: 8000,
      historyApiFallback: true
    },
    plugins: [
      new ReactRefreshWebpackPlugin()
    ]
  }
}