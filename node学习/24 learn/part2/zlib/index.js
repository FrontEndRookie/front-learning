const zlib = require("node:zlib");
const fs = require("node:fs");

// gzip 压缩

// 压缩
const readStream = fs.createReadStream("./index.txt", "utf-8");
const writeSteam = fs.createWriteStream("./index.txt.gz");
readStream.pipe(zlib.createGzip()).pipe(writeSteam);

//解压缩
const readStream = fs.createReadStream("./index.txt.gz");
const writeSteam = fs.createWriteStream("./index2.txt");
readStream.pipe(zlib.createGunzip()).pipe(writeSteam);

//deflate压缩

const readStream = fs.createReadStream("./index.txt", "utf-8");
const writeSteam = fs.createWriteStream("./index.txt.deflate");
readStream.pipe(zlib.createDeflate()).pipe(writeSteam);

const readStream = fs.createReadStream("./index.txt.deflate");
const writeSteam = fs.createWriteStream("./index3.txt");
readStream.pipe(zlib.createInflate()).pipe(writeSteam);
