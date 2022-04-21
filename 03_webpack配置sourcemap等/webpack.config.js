const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
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
      {
        test: /.(jpg|png|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 生成文件名
              name: '[name].[hash:6].[ext]',
              // 限制，文件大小超过6kb使用http加载，否则转换成base64
              limit: 6 * 1024,
              // 输出文件路径
              outputPath: 'assets'  
            }
          }
        ]
      }
    ]
  }
}