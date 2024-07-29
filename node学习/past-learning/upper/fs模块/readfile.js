let fs = require('fs')
//读取文件夹中文件
fs.readdir("./avator",(err,data)=>{
    if(!err){
        console.log(data);
    }
})