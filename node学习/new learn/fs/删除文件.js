const fs = require('fs')


// fs.unlink('./remove.text',err=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('删除成功')
// })

fs.rm('./remove.text'
,err=>{
        if(err){
            console.log(err)
        }
        console.log('删除成功')
    }
)