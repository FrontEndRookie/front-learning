const regexp:RegExp = /\w/
const date:Date = new Date()
const error:Error = new Error()

const node:NodeList = document.querySelectorAll("#aaa") //节点数组
const htmls:HTMLElement = document.body //html元素
const divs:HTMLDivElement| null = document.querySelector('div')//指定标签

addEventListener('click',(e:MouseEvent)=>{})
function myPro():Promise<number>{
    return new Promise<number>((res,rej)=>{
        res(1)
    })
}