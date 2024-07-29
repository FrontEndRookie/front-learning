let fs = require('fs').promises

fs.readdir('./avator').then(async(data)=>{
    // let arr = []
    // data.forEach(item=>{
    //     arr.push(fs.unlink(`./avator/${item}`))
    // })
    await Promise.all(data.map(item=>fs.unlink(`./avator/${item}`)))
    await fs.rmdir('./avator')

}).catch(err=>{})
