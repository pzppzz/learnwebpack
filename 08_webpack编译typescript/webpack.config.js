const path = require('path')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // 也可以使用babel-loader,但需要使用预设
        // use: ['ts-loader']
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-typescript']]
          }
        }]
      }
    ]
  }
}