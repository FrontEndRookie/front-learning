# asar文件



## asar基本的介绍

asar 英语全称 Atom Shell Archive。翻译成中文“Atom层文件归档”。这个其实就是一种 Electron 自定义的文件格式而已。在 Electron 应用进行构建的时候，会把所有的源代码以及相关的资源文件都打包到这个文件里面。

asar 文件开头有一段 JSON，类似于如下的结构：

```js
{
  "files": {
    "default_app.js": { "size": 38848, "unpacked": true },
    "icon.png": { "size": 1023, "offset": "0" },
    "index.html": { "size": 52792, "unpacked": true },
    "index.css": { "size": 21, "offset": "1023", "executable": true },
    "pickle.js": { "size": 4626, "offset": "1044" },
    "main.js": { "size": 593, "offset": "5670" }
    ...
  }
}
```

在开头，有一个 files，其对应的值就是被打包进来的文件的名称、大小以及该文件在 asar 文件内部的一个偏移值，这个偏移值（offset）非常重要，回头 Electron可以通过该偏移值在 asar 文件中找到具体的文件内容，从而加载文件内容。



Electron 之所以使用自定义的 asar 文件来存储源代码，有两个原因：

- 性能优化：asar 文件是一个归档文件，这意味着将原本项目中成百上千的小文件合并成了一个单文件。那么操作系统在加载文件的时候，也就只需要加载一个大文件，而非数千个小文件。在某些操作系统中，可以显著的提高读取速度和应用启动的速度。
- 避免文件路径的限制：例如在 windows 操作系统中，默认最长的资源路径的长度为 256 位字符串，那么打包为 asar 归档文件之后，使用的是虚拟路径，绕开了外部文件系统的限制。



## 制作asar

Electron 官方是提供了相应的工具，帮助我们制作 asar

```bash
npm install -g @electron/asar
```

安装完成后，就可以使用命令：

```bash
asar pack ./项目名 <asar文件名>.asar
```

> 注意，在使用 asar 打包的时候，切换到项目所在的父目录。

打包完成后，我们可以通过 asar list 的命令来查看打包了哪些文件进去。

```bash
asar list app.asar
```



## 使用asar文件

首先我们新创建一个项目，然后在主进程书写如下的代码：

```js
const { app, BrowserWindow } = require("electron");
const path = require("path");
require(path.join(__dirname, "app.asar", "menu.js"));
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "app.asar", "window/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});
```

这样就可以将我们之前所写的项目跑起来了。



## asar文件的意义

实际上像 electron-builder 这样的打包工具，一般在默认情况下也是将项目里面的所有文件进行 asar 归档操作，也方便我们后期介绍诸如像差分升级、electron-builder原理一类的知识。


