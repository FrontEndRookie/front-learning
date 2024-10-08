const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");
const { createProxyMiddleware } = require("http-proxy-middleware");
const html = fs.readFileSync("./index.html");
const config = require("./my.config.js");
http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    const proxyList = Object.keys(config.server.proxy);
    if (proxyList.includes(pathname)) {
      const proxy = createProxyMiddleware(config.server.proxy[pathname]);
      proxy(req, res);
      return;
    }
    res.writeHeader(200, {
      "Content-Type": "text/html",
    });
    res.end(html);
  })
  .listen(80);
