import {inc, dec} from './js/math.js'
import create from './js/create.js'
const {toString} = require('./js/toString.js')
console.log('加法:', inc(2342, 343))
console.log('减法:', dec(252, 2352))
console.log('信息:', toString('张三', 23))
const div = create('div')
document.body.appendChild(div)
