var http = require("http")
var url = require("url")

let {renderStatus} = require('./module/util')
let {renderHtml} = require('./module/util')
http.createServer((req,res)=>{
    // let urlobj = url.parse(req.url,true).pathname
    let urlobj = new URL(req.url,'http://127.0.0.1:3000').pathname
    console.log(new URL(req.url,'http://127.0.0.1:3000'));
    let search = new URL(req.url,'http://127.0.0.1:3000').searchParams
    console.log(search.get("a"));
    res.writeHead(renderStatus(urlobj),{
        'Content-Type':'text/html;charset=utf-8'
    })
    res.write(renderHtml(urlobj))
   
    res.end()
}).listen(3000,()=>{
    console.log('ok');
})


