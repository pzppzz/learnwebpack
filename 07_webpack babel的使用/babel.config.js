module.exports = {
  presets: [
    ['@babel/preset-env', {
      // false: 不引入polyfill 
      // usage: 根据代码引入  
      // entry: 目标浏览器需要的polyfill, 默认不会生效，需另外在代码中引入包
      useBuiltIns: 'entry', 
      corejs: 3
    }],
    ['@babel/preset-react']
  ]
}