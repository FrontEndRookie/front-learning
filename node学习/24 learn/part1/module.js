//CommonJS 规范

//引入模块（require）支持四种格式

//支持引入内置模块例如 http os fs child_process 等nodejs内置模块
//支持引入第三方模块express md5 koa 等
//支持引入自己编写的模块 ./ ../ 等
//支持引入addon C++扩展模块 .node文件

const fs = require("node:fs"); // 导入核心模块
const express = require("express"); // 导入 node_modules 目录下的模块
const myModule = require("./myModule.js"); // 导入相对路径下的模块
const nodeModule = require("./myModule.node"); // 导入扩展模块

//导出模块
module.exports = {
  hello: function () {
    console.log("Hello, world!");
  },
};

module.exports = 123;

//ESM规范
//引入模块 import 必须写在头部 使用ESM模块的时候必须开启一个选项 打开package.json 设置 type:module
import fs from "node:fs";
//如果要引入json文件需要特殊处理 需要增加断言并且指定类型json node低版本不支持
import data from "./data.json" assert { type: "json" };
//加载整体
import * as all from "xxx.js";
//动态导入
if (true) {
  import("./test.js").then();
}

//导出模块
export default {
  name: "test",
};
export const a = 1;

//Cjs 和 ESM 的区别
//Cjs是基于运行时的同步加载，esm是基于编译时的异步加载
//Cjs是可以修改值的，esm值并且不可修改（可读的）
//Cjs不可以tree shaking，esm支持tree shaking
//commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined
