let http = require('http')
let url = require('url')

http.createServer((req,res)=>{
    console.log(new URL(req.url,'http://127.0.0.1:3000').searchParams)
    let methods = new URL(req.url,'http://127.0.0.1:3000').searchParams.get("callback")
    res.end(`${methods}(${JSON.stringify({a:1})})`)
}).listen(3000,()=>{
    console.log('ok');
})