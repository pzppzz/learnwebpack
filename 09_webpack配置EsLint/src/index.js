const p = new Promise((resolve, reject) => {
  console.log('promise start')
  setTimeout(() => {
    resolve('promise')
  }, 1000)
})
p.then(console.log)