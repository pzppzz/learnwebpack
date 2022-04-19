import styles from '../css/index.css'
export default element => {
    const el = document.createElement(element)
    el.innerHTML = 'hello webpack!'
    el.className = styles.divel
    return  el
}