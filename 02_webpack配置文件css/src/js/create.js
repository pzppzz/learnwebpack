import '../css/index.css'
import '../css/style.less'
export default element => {
    const el = document.createElement(element)
    el.innerHTML = 'hello webpack!'
    el.className = 'divel'
    return  el
}