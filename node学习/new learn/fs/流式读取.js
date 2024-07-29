const fs = require('fs')
const rs = fs.createReadStream()

// 读取大文件使用 提升读取效率
rs.on('data',chunk=>{

})

//可选事件 非必要
rs.on('end',()=>{

})