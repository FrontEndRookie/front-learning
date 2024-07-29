let express = require("express")
//路由级别中间件

const router = express.Router()
router.get('/login',(req,res)=>{
    res.send("login")
})
router.get('/home',(req,res)=>{
    //get参数
    console.log(req.query)
    res.send("home")
})

router.post('/login',(req,res)=>{
    //post参数 需要配置应用中间件
    console.log(req.body);
    if(req.body.username=="sakura" && req.body.password == "1314"){
        res.send({ok:1})
    }else {
        res.send({ok:0})
    }
})
module.exports = router