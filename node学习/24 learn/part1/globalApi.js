globalThis.sakura = "xxx"; // 定义全局变量 globalThis根据环境自动判定
console.log(sakura);

console.log(__dirname); // 当前文件所在目录
console.log(__filename); // 当前文件目录+文件名

//process 进程
console.log(process.argv); //进程相关参数
console.log(process.cwd); //当前进程的目录
setTimeout(() => {
  console.log("五秒结束");
}, 5000);
setTimeout(() => {
  process.exit(); //提前结束进程
}, 2000);
process.on("exit", () => {
  console.log("当前进程结束");
});
