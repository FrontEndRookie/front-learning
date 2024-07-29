let server = require('./server.js')
let route = require("./route.js")
//注册路由
server.setRouter(route)
//启动服务
server.start()
 