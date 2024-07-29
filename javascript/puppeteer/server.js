// server.js
// ExpressJS调用方式
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());

// 引入NodeJS的子进程模块
const child_process = require("child_process");

app.get("*", function (req, res) {
  // 完整URL
  const url = req.protocol + "://" + req.hostname + req.originalUrl;
  if (url.includes("favicon")) return;

  // 预渲染后的页面字符串容器
  let content = "";

  // 开启一个puppeteer子进程
  const puppeteer = child_process.spawn("node", [
    path.join(__dirname, "puppeteer.js"),
    url,
  ]);
  // 设置stdout字符编码
  puppeteer.stdout.setEncoding("utf8");

  // 监听puppeteer的stdout，并拼接起来
  puppeteer.stdout.on("data", function (data) {
    content += data.toString();
  });

  // 监听子进程退出事件
  puppeteer.on("exit", function (code) {
    switch (code) {
      case 1:
        console.log("加载失败");
        res.send("加载失败123");
        break;
      case 2:
        console.log("加载超时: " + url);
        res.send(content);
        break;
      default:
        res.send(content);
        break;
    }
  });
});

app.listen(3000, function () {
  console.log("Spider app listening on port 3000!");
});
