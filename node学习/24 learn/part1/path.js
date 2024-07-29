//posix表示可移植操作系统接口，也就是定义了一套标准，
//遵守这套标准的操作系统有(unix,like unix,linux,macOs,windows wsl)
//Windows 并没有完全遵循 POSIX 标准

const path = require("node:path");
console.log(path.basename(__filename));

//模拟处理windows路径
console.log(path.win32.basename("C:\tempmyfile.html"));

//返回扩展名(如果没有点的路径，返回空值 )
console.log(path.extname("index.html"));

//拼接路径
path.join("/foo", "/cxk", "/ikun"); // /foo/cxk/ikun
path.join("/foo", "/cxk", "/ikun", "../"); // /foo/cxk/

//将相对路径解析并且返回绝对路径
path.resolve(__dirname, "./path.js"); ///Users/xuminghui/Desktop/nodejs 24:4/part1/path.js

//path.parse 返回一个包含路径各个组成部分的对象
// path.format 将一个对象格式化为一个路径字符串
path.parse("/home/user/dir/file.txt");

//{
//  root: '/',
//  dir: '/home/user/dir',
//  base: 'file.txt',
//  ext: '.txt',
//  name: 'file'
//}

path.format({
  root: "/",
  dir: "/home/user/documents",
  base: "file.txt",
  ext: ".txt",
  name: "file",
});
// /home/user/dir/file.txt

// 路径分隔符
// windows：\
// posix: /
console.log(path.sep); // /
