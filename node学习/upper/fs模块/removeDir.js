let fs = require('fs')

fs.readdir('./avator',(err,data)=>{
    console.log(data);
    data.forEach(item=>{
        fs.unlinkSync(`./avator/${item}`,(err)=>{
            console.log(err);
        })
    })
    fs.rmdir('./avator',(err)=>{
        console.log(err);
    })
})