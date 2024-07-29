import express from "express";
import cors from "cors";
import fs from "node:fs";
import crypto from "node:crypto";

const app = express();
app.use(cors({ origin: "*" }));
app.get("/script.js", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=20"); //20秒

  res.setHeader("Content-Type", "application/javascript");
  res.send('console.log("Hello, world!");'); // 返回 JavaScript 代码
});
app.get("/", (req, res) => {
  res.setHeader("Cache-Control", "public, max-age=20"); //20秒
  res.json({
    name: "cache",
    version: "1.0.0",
  });
});
const getModifyTime = () => {
  return fs.statSync("./testModified.js").mtime.toISOString(); //获取文件最后修改时间
};
// app.get("/api", (req, res) => {
//   res.setHeader("Cache-Control", "no-cache, max-age=2592000"); //表示走协商缓存
//   const ifModifiedSince = req.headers["if-modified-since"]; //获取浏览器上次修改时间
//   res.setHeader("Last-Modified", getModifyTime());
//   if (ifModifiedSince && ifModifiedSince === getModifyTime()) {
//     console.log("304");
//     res.statusCode = 304;
//     res.end();
//     return;
//   } else {
//     console.log("200");
//     res.statusCode = 200;
//     res.end("123");
//   }
// });

const getFileHash = () => {
  return crypto
    .createHash("sha256")
    .update(fs.readFileSync("testModified.js"))
    .digest("hex");
};
app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");

  res.setHeader("Cache-Control", "no-cache, max-age=2592000"); //表示走协商缓存
  const etag = getFileHash();
  const ifNoneMatch = req.headers["if-none-match"];
  if (ifNoneMatch === etag) {
    console.log(123);
    res.sendStatus(304);
    return;
  }
  res.setHeader("ETag", etag);
  res.send("Etag");
});
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
