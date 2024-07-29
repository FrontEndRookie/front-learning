var http = require("http")

let {renderStatus} = require('./module/util')
let {renderHtml} = require('./module/util')
http.createServer((req,res)=>{
    res.writeHead(renderStatus(req.url),{
        'Content-Type':'text/html;charset=utf-8'
    })
    // res.write("hello world")
    res.write(renderHtml(req.url))
    // res.write(`<html>
    //         <b>加粗字体</b>
    //     </html>`)
    res.end()
}).listen(3000,()=>{
    console.log('ok');
})
