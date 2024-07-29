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
    let requestTypeArray = ['text/html','image/x-icon','application/json']
    res.writeHead(responseArray[response],{"Content-Type":`${requestTypeArray[requestType]};charset=utf-8`})
    res.write(fs.readFileSync(`./static/${fileName}`),"utf-8")
    res.end()
}
function renderData(res,data,type=""){
    console.log(data);
    res.writeHead(200,{"Content-Type":`${type?type:'application/json'}`})
    res.write(JSON.stringify(data))
    res.end()
}
const route = {
    "/login":(req,res)=>{
        render(res,'login.html',0,0)
    },
    "/home":(req,res)=>{
        render(res,'home.html',0,0)
    },
    "/favicon.ico":(req,res)=>{
        render(res,'favicon.ico',0,1)
    },
    "/loginRequest":(req,res)=>{
        let request = new URL(req.url,"http://127.0.0.1")
        let getData = request.searchParams
        if(getData.get("username")=="sakura" && getData.get("password")==1314){
            renderData(res,'{"test":1}')
        } else {
            renderData(res,'{"test":2}')
        }
    },
    "/api/loginRequestPost":(req,res)=>{
        var post =''
        req.on("data",chunk=>{
            post += chunk
        })
        req.on("end",()=>{
            // console.log(post)
            post = JSON.parse(post)
            if(post.username == "sakura" && post.password == 1314){
                renderData(res,'{"test":1}')
            }else {
                renderData(res,'{"test":2}')
            }
        })

    },
    "/404":(req,res)=>{
        render(res,'404.html',1,0)
    }
}
module.exports = route