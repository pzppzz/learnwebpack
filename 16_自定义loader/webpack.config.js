const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        // use: "./myloader/loader01.js"
        use: "loader1"
      },
      {
        test: /\.css$/i,
        use: ["mystyleloader", "css-loader"]
      }
    ]
  },
  // 加载loader的文件夹
  resolveLoader: {
    modules: ['node_modules', 'myloaders'],
    extensions: ['.js', '.json'],
    // mainFields: ['loader', 'main'],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}