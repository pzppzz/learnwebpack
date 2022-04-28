const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
module.exports = {
  // 监听
  // watch: true,  
  mode: 'development',
  entry: './src/index.js',
  output:  {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 专门为webpack-dev-server写配置
  devServer: {
    // 开启热更新
    hot: true
  },
  plugins: [
    new HtmlWebapckPlugin({
      template: './public/index.html'
    })
  ]
}