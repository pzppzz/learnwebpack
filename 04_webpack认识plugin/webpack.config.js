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
  entry: './src/index.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    // 配置图片等资源输出路径及文件名 方式一
    // assetModuleFilename: 'img/[name].[hash:6].[ext]'
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 当css中通过@import引入其他css文件时，在往前几个使用loader先进行处理
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      // less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'less-loader',
            // options: {
            //   importLoaders: 1
            // }
          },
          'postcss-loader',
        ]
      },
      // 图片
      {
        test: /.(jpg|png|gif|jpeg|svg)$/,
        // 方式一
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       // 生成文件名
        //       name: '[name].[hash:6].[ext]',
        //       // 限制，文件大小超过6kb使用http加载，否则转换成base64
        //       limit: 6 * 1024,
        //       // 输出文件路径
        //       outputPath: 'assets'  
        //     }
        //   }
        // ]

        // 方式二 webpack5以后
        // type: 'asset/resource', // file-loader效果
        // type: 'asset/inline', // url-loader效果  base64
        type: 'asset',
        generator: {
          filename: 'asset/[name][hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            // 同limit
            maxSize: 6 * 1024
          }
        }
      },
      // 字体
      {
        test: /\.(woof2?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[hash:6][ext]'
        }
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