let fs = require('fs')
//删除目录 （如果目录中有文件，则无法删除）
fs.rmdir("./avator2",(err)=>{
    if(err && err.code ==='ENOENT'){
        console.log(err);
    }
})