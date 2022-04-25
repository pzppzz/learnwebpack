(function () {
  "use strict";
  // 模块存储对象
  var __webpack_modules__ = ({
    "./src/js/math.js":
      (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        // 给exports设置代理
        __webpack_require__.d(__webpack_exports__, {
          "dec": function () { return dec; },
          "inc": function () { return inc; }
        });
        function inc(val1, val2) {
          return val1 + val2
        }
        function dec(val1, val2) {
          return val1 - val2
        }
      })

  });
  // 模块缓存对象
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

  !function () {
    // 给模块加载函数添加一个d属性（函数）：给exports对象设置代理
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (__webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)) {
          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
      }
    };
  }();

  !function () {
    // 给模块加载函数添加一个o属性(函数)：判断某个key是否存在于某个对象上（不包括原型上的)
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }();

  !function () {
    // 给模块加载函数添加一个r属性(函数)：用于记录exports是一个esmodule
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  }();

  var __webpack_exports__ = {};
  !function () {
    __webpack_require__.r(__webpack_exports__);
    var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/math.js");
    /** 
     * (0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.inc)(1, 1)
     * 相当于_js_math_js__WEBPACK_IMPORTED_MODULE_0__.inc(1, 1)
     */
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.inc)(1, 1))
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.dec)(1, 1))
  }();
})()