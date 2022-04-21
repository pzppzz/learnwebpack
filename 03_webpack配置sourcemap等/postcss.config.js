/** 单独配置postcss 避免在webpack.config.js中进行重复操作 */
module.exports = {
  plugins: [
    'postcss-preset-env'
  ]
}