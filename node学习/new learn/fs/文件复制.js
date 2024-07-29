//1.readFile
const fs = require('fs')
const process = require('process')
// let data = fs.readFileSync('./ys.mp4')
// fs.writeFileSync('./yscopy.mp4',data)
// console.log(process.memoryUsage()) //89030656字节 84MB
//2.流式操作
const rs = fs.createReadStream('./ys.mp4') //读取对象
const ws = fs.createWriteStream('./yscopy2.mp4') //写入对象

rs.on('data',chunk=>{
    ws.write(chunk)
})

rs.on('end',()=>{
    console.log(process.memoryUsage()) //58179584字节  55MB
})

// pipe 
// rs.pipe(ws)