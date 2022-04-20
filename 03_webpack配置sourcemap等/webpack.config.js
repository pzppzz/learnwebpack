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
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // 插件
                plugins: [
                  [
                    // 自动添加浏览器私有前缀，兼容
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            }
          }
        ]
      }
    ]
  }
}