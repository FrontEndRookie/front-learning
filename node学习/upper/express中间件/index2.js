const express = require('express')
const app = express()
const indexRouter = require('./router2/indexRouter')
//使用路由中间件
app.use("/",indexRouter)
//将路由中间件设置为二级目录
app.use("/api",indexRouter)
//错误中间件
app.use((req,res)=>{
    res.status(404).send("找不到页面")
})
app.listen(3000,()=>{
    console.log("server start");
})