const crypto = require("crypto")
//aes加密
function encrypt(key,iv,data){
    let dep = crypto.createCipheriv("aes-128-cbc",key,iv)
    return dep.update(data,"binary","hex") + dep.final("hex")
}
//aes解密
function decrypt(key,iv,crypted){
     crypted = Buffer.from(crypted,"hex").toString("binary")
    let dep = crypto.createDecipheriv("aes-128-cbc",key,iv)
    return dep.update(crypted,"binary","utf-8")+dep.final("utf-8")
}
let key = "abcdef1234567890"
let iv = "tbcdey1234567890"
let data = "sakura"
let cryted = encrypt(key,iv,data)
console.log(cryted);
let decryted = decrypt(key,iv,cryted)
console.log(decryted);