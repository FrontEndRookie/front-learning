let fs = require("fs")
// function route(res,pathname){
//     switch(pathname){
//         case "/login":
//             res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
//             res.write(fs.readFileSync("./static/login.html"),"utf-8")
//             break;
//         case "/home":
//             res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
//             res.write(fs.readFileSync("./static/home.html"),"utf-8")
//             break;
//         default:
//             res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
//             res.write(fs.readFileSync("./static/404.html"),"utf-8")
//     }
// }
function render(res,fileName,response,requestType){
    let responseArray = [200,404]
    let requestTypeArray = ['text/html','image/x-icon']
    res.writeHead(responseArray[response],{"Content-Type":`${requestTypeArray[requestType]};charset=utf-8`})
    res.write(fs.readFileSync(`./static/${fileName}`),"utf-8")
}
const route = {
    "/login":(res)=>{
        render(res,'login.html',0,0)
    },
    "/home":(res)=>{
        render(res,'home.html',0,0)
    },
    "/favicon.ico":(res)=>{
        render(res,'favicon.ico',0,1)
    },
    "/404":(res)=>{
        render(res,'404.html',1,0)
    }
}
module.exports = route