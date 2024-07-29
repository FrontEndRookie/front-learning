const fs = require('fs')

//重命名
// fs.rename('./1.text','./rename.text',err=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('成功')
// })

//移动
fs.rename('./rename.text','./renameFile/rename.text',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('成功')
})