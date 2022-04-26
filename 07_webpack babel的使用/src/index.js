import 'core-js/stable'
import 'regenerator-runtime/runtime'
const msg = 'hello world!'
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log(msg)
  }
}
const arrowFunc = () => {
  console.log('arrow function')
}

const p1 = new Promise((resolve, reject) => {})
const p = new Person('zhangsan', 23)
console.log(p.name, p.age)
p.sayHi()