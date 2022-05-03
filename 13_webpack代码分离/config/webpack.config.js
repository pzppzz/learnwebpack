const path = require('path')
const { merge } = require('webpack-merge')
const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devConfig = require('./webpack.dev.js')()
const prodConfig = require('./webpack.prod.js')()
// 公共部分
const baseConfig = {
  // entry: './src/index.js',
  // 设置多入口
  entry: {
    main: './src/main.js',
    index: './src/index.js'
    // 模块分离dayjs,denpendOn也可以是数组
    // main: {import: './src/main.js', dependOn: 'dayjs'},
    // index: {import: './src/index.js', dependOn: 'dayjs'},
    // 'dayjs': 'dayjs'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js', // 实现代码分离 main.bundle.js index.bundle.js
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'pages': path.resolve(__dirname, '../src/pages')
    }
  },
  optimization: {
    // "natural" | "named" | "deterministic" | "size" | "total-size" | false
    chunkIds: 'named', //https://webpack.js.org/configuration/optimization/#optimizationchunkids
    // 拆分包
    // https://webpack.js.org/plugins/split-chunks-plugin/
    splitChunks: {
      chunks: 'all', // async 异步导入  initial 同步导入 all
      minSize: 20000, // 默认20000 要拆分成包的最小大小
      maxSize: 20000, // 将大于20000的包拆分成至少minSize大小的包
      minChunks: 2, // 表示要拆分的包至少要引入几次
      cacheGroups: {
        module: {
          // mac window电脑路径斜杠不同
          test: /[\\/]node_modules[\\/]/,
          filename: '[id].module.js'
        }
      }
    },
    // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    // runtimeChunk: true // single multiple boolean object
    runtimeChunk: {
      name: function(entrypoint) {
        return `runtime-${entrypoint.name}`
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 进度展示
    new ProgressPlugin((percentage, msg, ...args) => {
      console.log(percentage, msg, ...args)
    }),
  ]
}
module.exports = function (env) {
  process.env.NODE_ENV = env.production ? 'production' : 'development'  // 使babel.config.js能判断当前环境
  return env.production ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig)
}