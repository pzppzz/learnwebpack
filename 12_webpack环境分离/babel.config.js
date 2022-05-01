const presets = [['@babel/preset-env'], ['@babel/preset-react']]
const plugins = []
const env = process.env.NODE_ENV
console.log(env)
if (env === 'production') {
  // do something
} else {
  // do something
}
module.exports = {
  presets,
  plugins
}