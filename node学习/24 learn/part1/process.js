//process 是Nodejs操作当前进程和控制当前进程的API，并且是挂载到globalThis下面的全局API

//1. os CPU架构
console.log(process.arch); //arm64

//2.获取执行进程后面的参数 返回是一个数组
//如果执行 node process.js --test 数组中会包含test
console.log(process.argv);

//3. 获取工作目录 同__dirname
//esm模式下无法使用__dirname
console.log(process.cwd()); ///Users/xuminghui/Desktop/nodejs 24:4/part1

//4.内存信息
console.log(process.memoryUsage());
//{
//    rss: 39043072, //存量
//    heapTotal: 6094848, //v8分配的内存
//    heapUsed: 5275368, //已经使用的内存
//    external: 419143, //外部使用的内存
//    arrayBuffers: 17382 //二进制总量
// }

//5 退出进程
setTimeout(() => {
  //   process.exit(1); //1 表示退出状态码
});
// process.on("exit", (code) => {
//   console.log("进程退出了，退出码", code);
// });

// 6. kill 杀死进程 需要pid
setTimeout(() => {
  //   process.kill(process.pid);
});

//7.env 环境变量
//修改只会在当前进程生效，不会真正影响系统的环境变量
console.log("env", process.env);

//cross-env
console.log(process.env.NODE_ENV == "dev" ? "开发" : "生产");
