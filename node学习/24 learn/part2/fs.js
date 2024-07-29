const fs = require("fs");

//读取文件 异步
fs.readFile("./fstest.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//读取文件 同步 会阻塞下面的代码
const test = fs.readFileSync("./fstest.txt");
//本身返回的是buffer数据
console.log(test.toString());

const fsPro = require("node:fs/promises");

fsPro.readFile("./fstest.txt", "utf-8").then((data) => {
  console.log("promise mode", data);
});

//可读流 处理大文件的时候会用
const readStream = fs.createReadStream("./fstest.txt", "utf-8");

readStream.on("data", (chunk) => {
  console.log("流读取", chunk);
});

readStream.on("end", () => {
  console.log("读取完成");
});

// 创建文件夹

fs.mkdir("./test", (err) => {
  //异步创建必须有回调
  console.log(err);
});
fs.mkdirSync("./testSync/son1/son2", { recursive: true }); //递归创建

//删除文件夹
fs.rmdir("./test", (err) => {
  console.log(err);
});

//重命名
// fs.renameSync("./fstest1.txt", "./fstest.txt");

//监听文件变化
fs.watch("./fstest.txt", (eventType, filename) => {
  console.log(eventType, filename);
});

//等本轮事件循环结束后执行
setImmediate(() => {
  console.log("immediate");
});
