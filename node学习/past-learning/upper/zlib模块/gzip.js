const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
const gZip = zlib.createGzip()
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./index.js')
    res.writeHead(200,
        {
            'Content-Type':'application/x-javascript;charset=utf-8',
            'Content-Encoding':'gzip'
        })
    readStream.pipe(gZip).pipe(res)
}).listen(3000,()=>{
    console.log('server start');
})