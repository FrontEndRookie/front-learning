let http = require('http')
let https = require('https')
let url = require('url')
let cheerio = require('cheerio')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8',
        'access-control-allow-origin':'*'
    })
    getBiliBili((data)=>{res.end(spider(data))})
}).listen(3000,()=>{
    console.log('ok');
})

function getBiliBili(response){
    var data =""
    https.get('https://i.maoyan.com/',
        (res)=>{
            res.on('data',(chunk)=>{
                data+=chunk
            })
            res.on('end',()=>{
                response(data)
            })
        }
    )
}
function spider(data){
    let $ = cheerio.load(data)
    let $movielist = $('.column.content')
    let movies = []
    $movielist.each((i,v)=>{
        movies.push($(v).find('.title').text())
    })
    return data
}