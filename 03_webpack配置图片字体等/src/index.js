import create from "./js/create.js";
import imgSrc from './img/OIP-C (7).jpg'
const div = create('div')
const img = new Image(300)
img.src = imgSrc
document.body.appendChild(div)
document.body.appendChild(img)