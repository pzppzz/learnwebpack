const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(global.__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 在这里写优先级比babel.config.js，.browserslistrs高，
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    chrome: 100
                  },
                  useBuiltIns: 'usage',
                  corejs: 3
                }]
              ]
            }
          }
        ]
      }
    ]
  }
}