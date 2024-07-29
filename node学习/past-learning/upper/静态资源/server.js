const http = require("http")
let Router = {}
function setRouter(route){
    Object.assign(Router,route)
}
function start(){
    http.createServer((req,res)=>{
        const url = new URL(req.url,"http://127.0.0.1")
        console.log(url.pathname);
        Router[url.pathname]? Router[url.pathname](req,res) :Router['/404'](req,res)
    }).listen(3000,()=>{
        console.log("success");
    })
}
exports.start = start
exports.setRouter = setRouter
