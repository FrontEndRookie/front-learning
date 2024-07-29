const fs = require('fs')

let ws = fs.createWriteStream('./2.txt','utf-8')
ws.write("11111111111111")
ws.write("11111111111111")
ws.write("11111111111111")
ws.write("11111111111111")
ws.end()