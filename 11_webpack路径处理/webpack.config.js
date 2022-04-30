const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: 'only', // 当有错误并且修复后不刷新浏览器，而是通过热模块替换错误的地方
    // 规定在哪里访问服务，默认为/ localhost:3000/index.html => localhost:3000/api/index.html
    // publicPath: '/api',
    // 自动在浏览器打开
    open: true,
    // 设置端口
    port: 8000,
    compress: true, //为静态资源开启gzip compression压缩
    // 配置代理
    // proxy: 'http://localhost:3000',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // pathRewrite: { '^/api': '' },
        changeOrigin: true
      },
    },
    // 解决单页面路由刷新返回404的问题(不管什么路径都返回index.html)
    // historyApiFallback: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' },
      ],
    },
  },
  resolve: {
    mainFiles: ['index'], //./components/Home => ./components/Home/index
    extensions: ['.js', '.jsx', '.json', '.wasm'], //./components/Home/index => ./components/Home/index.js等没找到就会报错
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'), // @components/Home
      'pages': path.resolve(__dirname, './src/pages')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 打包后html在引入js的路径前拼接./，部署一般为/
    // src="bundle.js" => src="./bundle.js"
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}