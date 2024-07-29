let fs = require('fs')
//如果没有文件就创建文件，有文件则覆盖文件中的内容
fs.writeFile('./avator/hellow.txt','hello world',err=>{
    console.log(err);
})
//追加内容
fs.appendFile('./avator/hellow.txt','\nappend content',(err)=>{
    console.log(err);
})

//读取内容
fs.readFile('./avator/hellow.txt',"utf-8",(err,data)=>{
    if(!err){
        console.log(data);
    }
})