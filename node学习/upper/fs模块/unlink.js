let fs = require('fs')
//删除文件
fs.unlink('./avator/hellow.txt',err=>{
    console.log(err);
})