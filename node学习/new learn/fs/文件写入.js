const fs = require("fs");
// 异步写入
fs.writeFile("./1.text", "faker", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("写入成功");
});

//同步写入
fs.writeFileSync("./1.text", "faker1");

//异步追加写入
fs.appendFile("./1.text", "\r\nhide on bush", (err) => {
  // \r\r为换行
  if (err) {
    console.log(err);
  }
  console.log("追加成功");
});

// 同步追加写入
fs.appendFileSync("./1.text", "hide on bush");

// writefile 同步写入
fs.writeFile("./1.text", "writefile追加写入", { flag: "a" }, (err) => {
  console.log(err);
});

// console.log('同步')
