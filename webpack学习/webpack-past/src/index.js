// import testESM from './testESM'
import imgSrc from './assets/12.jpg'
import svgSrc from './assets/success.svg'
import test from './assets/test.txt'
import './lessLoader.less'
import './cssLoader.css'
import './async-module.js'
import './ts.ts'
// import '@babel/polyfill' //npm i  @babel/polyfill -D 降级js语法
// console.log(Array.from([1,2,3],x=>x+x))
const worker = new Worker(new URL('./worker.js',import.meta.url))
worker.postMessage({question:'hello'})
worker.onmessage = (mes) => {
    console.log(mes,'worker message')
}
console.log(_.join([4,5,6]))
const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width:100px;height:100px'
img2.src = svgSrc
document.body.appendChild(img2)

const word = document.createElement('div')
word.style.cssText = 'color:pink'
word.textContent = test
document.body.appendChild(word)

function add(x,y){
    return x+y
}
console.log(add(3,4))
// console.log(testESM())

//serviceWork离线缓存  如需要删除缓存 chrome://serviceworker-internals/
if('serviceWorker' in navigator) {
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('../service-worker.js').then(registration=>{console.log('sw 注册成功',registration)} ).catch( registrationError=>{console.log('sw 注册失败')} )
    })
}