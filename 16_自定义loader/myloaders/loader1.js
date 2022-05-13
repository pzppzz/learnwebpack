// loader本质就是一个函数模块
module.exports = function(content, sourcemap, meta) {
  // content为文件内容或者上一个loader处理后的文件内容
  // console.log(content)
  // 同步loader
  // return content /** 或者 this.callback(null, content) */
  // 异步loader
  const callback = this.async()
  setTimeout(() => {
    callback(null, content)
  }, 2000)
}