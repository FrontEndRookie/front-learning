let fs = require('fs')
//判断文件类型
fs.stat('./avator',(err,data)=>{
    console.log(data.isFile());
    console.log(data.isDirectory());
})