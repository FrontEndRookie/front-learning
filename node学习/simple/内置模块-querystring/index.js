let querys = require('querystring')
let qs = 'x=3&y=4'
console.log(querys.parse(qs));
let qo = {
    x:4,
    y:4
}
console.log(querys.stringify(qo));

let bianma = 'id=3&nex=4'

console.log(querys.escape(bianma));

let jiema = 'id%3D3%26nex%3D4'
console.log(querys.unescape(jiema));
