let fs = require("fs")
//创建文件夹
fs.mkdir('./avator',(err)=>{
    // console.log(err,1);
    if(err && err.code === 'EEXIST'){
        console.log('err');
    }
})