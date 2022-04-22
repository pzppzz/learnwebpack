import '../styles/index.css'
import '../styles/component.less'
export default element => {
    const el = document.createElement(element)
    el.innerHTML = 'hello webpack!'
    el.className = 'divel'
    return  el
}