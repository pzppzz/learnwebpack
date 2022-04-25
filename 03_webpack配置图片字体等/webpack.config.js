const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
  }
}