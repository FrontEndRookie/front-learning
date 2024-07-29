const crypto = require( 'crypto' )
// const hash = crypto.createHash('md5')
//hmac 需要输入密钥，使得同样的输入会得到不同的签名。达到随机数增强的效果
const hash = crypto.createHmac('md5',"sakura")

hash.update('hello world')
console.log(hash.digest("hex"))