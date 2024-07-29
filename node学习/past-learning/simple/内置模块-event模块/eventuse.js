let http = require('http')
let https = require('https')
let url = require('url')
let eventer = require('events')
let event
http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json;charset=utf-8',
        'access-control-allow-origin':'*'
    })
     event = new eventer()
    event.on('getData',(data)=>{
        res.end(data)
    })
    getBiliBili()
}).listen(3000,()=>{
    console.log('ok');
})

function getBiliBili(response){
    var data =""
    https.get('https://api.bilibili.com/x/web-interface/search/all/v2?__refresh__=true&_extra=&context=&page=1&page_size=42&order=&duration=&from_source=&from_spmid=333.337&platform=pc&highlight=1&single_column=0&keyword=夜曲&preload=true&com2co=true',
        (res)=>{
            res.on('data',(chunk)=>{
                data+=chunk
            })
            res.on('end',()=>{
                event.emit('getData',data)
            })
        }
    )
}