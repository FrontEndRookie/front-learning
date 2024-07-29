const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura")
})
//b有或者无
app.get("/ab?cd",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})
//id 和id2为任意值
app.get("/ab/:id/:id2",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})
//b一个或多个
app.get("/ab+cd",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})

//*为任意字符
app.get("/ab*cd",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})
//cd有或无
app.get("/ab(cd)?e",(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})
//支持正则表达式
app.get(/.*fly$/,(req,res)=>{
    // res.write("hello world")
    // res.end()
    res.send("sakura1")
})
//支持多个回调函数 用next连接
app.get("/text",(req,res,next)=>{
    let ifValid =true
    if(ifValid){
        next()
    }else {
        res.send("error")
    }
},(req,res)=>{
    res.send("success")
})
//支持数组指明多个回调函数 效果同上
let methods1 = (req,res,next)=>{
    let ifValid =true
    if(ifValid){
        next()
    }else {
        res.send("error")
    }
}
let methods2 = (req,res)=>{
    res.send("success")
}
app.get("/text2",[methods1,methods2])
//可以数组和回调函数组合
app.get("/text3",[methods1],(req,res)=>{
    res.send("success")
})

app.listen(3000,()=>{
    console.log("server start");
})