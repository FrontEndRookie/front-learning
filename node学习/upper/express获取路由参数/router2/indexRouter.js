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
    res.send({ok:1})
})
module.exports = router