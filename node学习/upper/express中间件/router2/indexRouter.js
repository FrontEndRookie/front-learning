let express = require("express")
//路由级别中间件
const router = express.Router()
router.get('/home',(req,res)=>{
    res.send("home")
})

router.get('/login',(req,res)=>{
    res.send("login")
})
module.exports = router