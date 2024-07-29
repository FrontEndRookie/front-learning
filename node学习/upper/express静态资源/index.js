const express = require('express')
const app = express()
let methods1 = (req,res,next)=>{
    let ifValid =true
    console.log("验证成功");
    if(ifValid){
        next()
    }else {
        res.send("error")
    }
}
//指定路由
app.use('/text',methods1)
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

//应用级中间件 路由text不会作用，text2和text3会作用中间件 
app.use(methods1)


let methods2 = (req,res)=>{
    res.send("success")
}
app.get("/text2",[methods2])
//可以数组和回调函数组合
app.get("/text3",(req,res)=>{
    res.send("success")
})

app.listen(3000,()=>{
    console.log("server start");
})