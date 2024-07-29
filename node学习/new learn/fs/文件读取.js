const fs = require('fs')

fs.readFile('./2.text',(err, data)=>{
    console.log(err,data.toString())
});

//同步读取

let data = fs.readFileSync('./2.text')
console.log(data.toString())