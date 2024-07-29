let buffer =  Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buffer.toString());

let bufferOver = Buffer.from('hello')
bufferOver[0] = 361 // 舍弃高位数字 0001 0110 1001 =》 0110 1001 =》69
console.log(bufferOver)

let bufferChina = Buffer.from('中文')
console.log(bufferChina) //打印出六个字节 e4 b8 ad e6 96 8