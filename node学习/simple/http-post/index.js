let http = require('http')
let https = require('https')
let url = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json;charset=utf-8',
        'access-control-allow-origin':'*'
    })
    getXiaomi((data)=>{res.end(data)})
}).listen(3000,()=>{
    console.log('ok');
})

function getXiaomi(response){
    var data =""
    var option = {
        hostname:'m.xiaomiyoupin.com',
        post:443,
        path:'/mtop/mf/resource/data/batchList',
        method:'POST',
        headers:{
            "Content-Type":'application/json',
        }
    }
   var request = https.request(option,(res)=>{
    res.on('data',(chunk)=>{
        data+=chunk
    })
    res.on('end',()=>{
        response(data)
    })
   }
    )
    request.write(JSON.stringify([
        {},
        [
          "newer_popup_ad",
          "download_options"
        ]
      ]))
        request.end()
}