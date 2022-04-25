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
const p = new Person('zhangsan', 23)
console.log(p.name, p.age)
p.sayHi()