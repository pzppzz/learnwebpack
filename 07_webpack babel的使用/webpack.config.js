const path = require('path')
// 打包之前先删除之前的打包生成的文件夹，如果不使用这个插件，就只会覆盖
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 自动在打包生成的文件家里添加一个html文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// DefinePlugin webpack内置插件 允许在编译时定义配置的全局变量
const { DefinePlugin } = require('webpack')
// 规定从哪些文件夹中复制文件到打包后生成的文件夹中
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',  // 默认为production 打包后的代码是压缩过的，不易于阅读
  devtool: 'source-map', // 默认为eval
  // entry: './src/index.js',
  entry: './src/app.jsx',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'build'), 
  },
  module: {
    rules: [
      // 编译js
      {
        test: /\.js$/,
        // 排除文件，不需使用babel
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // 可以通过babel.config.js进行配置
            // options: {
            //   // 该配置会根据.browserslistrc文件编译出适配浏览器的js代码，
            //   presets: [
            //     '@babel/preset-env'
            //   ]
            //   // plugins: [
            //   //   '@babel/plugin-transform-arrow-functions'
            //   // ]
            // }
          }
        ]
      }, {
        test: /\.jsx/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: 'learn webpack'设置网页名称
      template: './public/index.html'  // 设置模板
    }),
    new DefinePlugin({
      // 注意写法  './' => const BASE_URL = ./(报错)   '"./"' => const BASE_URL = './'
      BASE_URL: '"./"'
    }),
    // https://www.npmjs.com/package/copy-webpack-plugin
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // to: 'build'  可以忽略 默认为output里的path
          globOptions: {
            // 选择要忽略的文件
            ignore: [
              '**/index.html',
              // mac电脑
              // '**/.DS_Store'
            ]
          }
        }
      ]
    })
  ]
}