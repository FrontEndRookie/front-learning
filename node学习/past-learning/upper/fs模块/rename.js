let fs = require('fs')
//重命名文件夹
fs.rename('./avators','./avator2',(err)=>{
    console.log(err);
    if(err && err.code ==='ENOENT'){
        console.log('当前文件不存在');
    }
})