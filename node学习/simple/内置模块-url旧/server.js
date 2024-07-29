var http = require("http")
var url = require("url")

let {renderStatus} = require('./module/util')
let {renderHtml} = require('./module/util')
http.createServer((req,res)=>{
    let urlobj = url.parse(req.url,true).pathname
    res.writeHead(renderStatus(urlobj),{
        'Content-Type':'text/html;charset=utf-8'
    })
    //url.format为反向url.parse

    console.log(url.parse(req.url,true),url.format({
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?id=1',
        query: { id: '1' },
        pathname: '/home',
        path: '/home?id=1',
        href: '/home?id=1'
      }));
    // res.write("hello world")
    res.write(renderHtml(urlobj))
    // res.write(`<html>
    //         <b>加粗字体</b>
    //     </html>`)
    res.end()
}).listen(3000,()=>{
    console.log('ok');
})

let urlResolve =url.resolve('/a/b/','c') //最后需要有斜杠 否则替换最后一个路径
console.log(urlResolve);
let urlTotalResove = url.resolve('http://www.baidu.com',"c") //参数为完整url，url的路径会被直接全部替换
console.log(urlTotalResove);
