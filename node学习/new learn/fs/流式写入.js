const fs = require('fs')

//适合频繁写入/大文件写入 程序打开一个文件是需要消耗性能的
const ws = fs.createWriteStream('./2.text')

ws.write('xxxxxx\r\n')
ws.write('mmmmmm\r\n')
ws.write('hhhhhh\r\n')

ws.close()