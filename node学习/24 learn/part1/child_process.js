const { exec, execSync } = require("child_process");

//exec 用于执行shell命令 或者跟软件交互 返回有字节上限
exec("node -v", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

const nodeVersion = execSync("node -v").toString();
console.log(`Node version: ${nodeVersion}`);

//execSync("start chrome http://www.baidu.com --incognito"); //windows
// exec("open -a 'Google Chrome' http://www.baidu.com"); //macos

const { spawn, spawnSync } = require("child_process");

// const netstat = spawn("netstat", ["-P", "tcp"]);

// netstat.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// netstat.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
// });

// netstat.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });

//fork只能接收nodejs模块
const { fork } = require("child_process");
const testProcess = fork("./globalApi.js");
//可用于进程通信
//发送消息
testProcess.send("我是主进程");

testProcess.on("message", (data) => {
  console.log("我是主进程接受消息111：", data);
});

//子进程接收消息
process.on("message", (data) => {
  console.log("子进程接受消息：", data);
});

process.send("我是子进程");
