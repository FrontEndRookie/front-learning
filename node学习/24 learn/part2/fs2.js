const fs = require("node:fs");

//写入文件 flag: a append 追加
fs.writeFileSync("fstest.txt", "Hello, World!", { flag: "a" });

fs.appendFileSync("fstest.txt", "\nThis is a new line.");

//创建可写流 大量数据分批插入

let test = ["呜呜呜呜", "呜呜呜呜", "呜呜呜呜", "呜呜呜呜"];

let writeStream = fs.createWriteStream("fstest.txt", {
  flags: "a",
});

test.forEach((item) => {
  writeStream.write(item + "\n");
});

writeStream.on("finish", () => {
  console.log("写入完成");
});
writeStream.end();

//硬链接 共享文件 同object两文件一个修改另一个同步修改
fs.linkSync("fstest.txt", "fstest_link.txt");

//软链接  类似windows的快捷方式 需要管理员权限
fs.symlinkSync("fstest.txt", "fstest_symlink.txt");

//使用硬链接或软链接的选择取决于你的具体需求，
//如果你需要在不同的目录中访问同一个文件，但又不想复制文件内容，那么硬链接是一个好选择。
//如果你需要创建一个跨文件系统的引用，或者你想要创建一个可以独立于目标文件存在的引用，那么软链接可能更适合。
//pnpm使用的是软链接 （可以跨文件系统和链接到目录结构）
