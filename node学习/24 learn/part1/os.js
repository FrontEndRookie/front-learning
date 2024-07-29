const os = require("node:os");
// platform 获取操作系统平台
os.platform(); //darwin
//系统版本号
console.log(os.release());

console.log(os.type());
//它在 Linux 上返回 'Linux'
//在 macOS 上返回 'Darwin'
//在 Windows 上返回 'Windows_NT'

console.log(os.version());
//Darwin Kernel Version 21.3.0: Wed Jan  5 21:37:58 PST 2022; root:xnu-8019.80.24~20/RELEASE_ARM64_T6000

console.log(os.arch()); //返回cpu的架构 arm64

//读取用户的目录
console.log(os.homedir()); ///Users/xuminghui

//操作系统线程 cpu的信息
console.log(os.cpus());

//网络信息
console.log(os.networkInterfaces());

//webpack vite open:true 打开浏览器
const platform = os.platform();
const { exec } = require("child_process");

function openBrowser(url) {
  if (os.platform() === "darwin") {
    // macOS
    exec(`open ${url}`); //执行shell脚本
  } else if (os.platform() === "win32") {
    // Windows
    exec(`start ${url}`); //执行shell脚本
  } else {
    // Linux, Unix-like
    exec(`xdg-open ${url}`); //执行shell脚本
  }
}

// openBrowser("https://www.juejin.cn");
