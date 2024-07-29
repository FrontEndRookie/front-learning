let fs = require("fs")
const path = require("path")
const mime = require("mime")
function render(res,fileName,response,requestType=""){
    let responseArray = [200,404]
    res.writeHead(responseArray[response],{"Content-Type":`${requestType?requestType:'text/html'};charset=utf-8`})
    res.write(fs.readFileSync(`${fileName}`),"utf-8")
    res.end()
}
function renderData(res,data,type=""){
    console.log(data);
    res.writeHead(200,{"Content-Type":`${type?type:'application/json'}`})
    res.write(JSON.stringify(data))
    res.end()
}

function readStaticFile(req,res) {
    const myURL = new URL(req.url,'http://127.0.0.1:3000')
    const pathname = path.join(__dirname,"/static",myURL.pathname)
    
    if(myURL.pathname!=='/' && fs.existsSync(pathname)){
        let type = myURL.pathname.split('.')[1]
        render(res,pathname,0,mime.getType(type))
        return true
    } else {
        return false
    }
}
const route = {
    "/login":(req,res)=>{
        render(res,'./static/login.html',0)
    },
    "/":(req,res)=>{
        render(res,'./static/home.html',0)
    },
    "/home":(req,res)=>{
        render(res,'./static/home.html',0)
    },
    "/favicon.ico":(req,res)=>{
        render(res,'./static/favicon.ico',0,'image/x-icon;')
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
        if(readStaticFile(req,res)){
            return
        }
        render(res,'./static/404.html',1)
    }
}

module.exports = route