/** 文件名默认为webpack.config.js 但是可以更改 需在package.json里更改命令 webpack --config 配置文件名 */
const path = require('path')
module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 输出配置
  output: {
    // 输出文件名
    filename: 'bundle.js',
    // 输出路径 **必须是绝对路径
    path: path.resolve(__dirname, './build')
  },
  module: {
    // module.rules 允许你在 webpack 配置中指定多个 loader
    rules: [
      {
        // 匹配规则
        test: /\.css$/i,
        // css文件打包需要依赖style-loader css-loader
        // 并且style-loader必须放在前面，loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)
        // css-loader负责加载我们的css文件并进行打包，style-loader负责将样式动态添加到页面中（添加style标签）
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            // options值为字符串或者对象 会被传入loader
            options: {
              // css模块化
              modules: true
            }
          }
        ]
        // 简写 use: ['style-loader', 'css-loader'] 最终会转化为上面的结构
      },
    ],
  },
}