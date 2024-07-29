let http = require('http')
let url = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json;charset=utf-8',
        'access-control-allow-origin':'*'
    })
    res.end(`${JSON.stringify({a:1})}`)
}).listen(3000,()=>{
    console.log('ok');
})