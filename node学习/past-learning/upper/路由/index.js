let server = require('./server')
let route = require("./route")
//注册路由
server.setRouter(route)
//启动服务
server.start()
 