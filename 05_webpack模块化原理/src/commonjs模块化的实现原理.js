/** CommonJs模块化原理 */
(function () {
  // 定义了一个存储模块的对象，以模块路径为key值，用一个函数将模块里的代码包裹起来并作为value
  var __webpack_modules__ = ({
    "./src/js/math.js":
      (function (module) {
        // 我们自己模块里的代码
        function inc(val1, val2) {
          return val1 + val2
        }

        function dec(val1, val2) {
          return val1 - val2
        }
        module.exports = {
          inc,
          dec
        }
      })

  });
  // 模块缓存对象，加载的时候先从这里取
  var __webpack_module_cache__ = {};

  // 模块加载函数
  function __webpack_require__(moduleId) {
    // 判断要加载的模块是否存在于缓存
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // 创建一个新的模块并添加到缓存
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    // 执行模块对象里对应的函数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    
    return module.exports;
  }

  var __webpack_exports__ = {};
  // 立即执行函数
  !function () {
    const { inc, dec } = __webpack_require__("./src/js/math.js")
    console.log(inc(1, 1))
    console.log(dec(1, 1))
  }();
})()
  ;