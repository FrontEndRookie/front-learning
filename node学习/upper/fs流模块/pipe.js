const fs =require('fs')
//高性能复制文件方式
const readStream = fs.createReadStream("./1.txt")
const writeStream = fs.createWriteStream("./2.txt")
readStream.pipe(writeStream)