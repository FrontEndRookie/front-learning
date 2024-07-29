import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import mime from "mime";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === "GET" && url.startsWith("/static")) {
    const staticPath = path.join(process.cwd(), url);
    console.log(staticPath, url);
    fs.readFile(staticPath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          "content-type": "text/plain",
        });

        res.end("Not Found");
      } else {
        console.log("测试缓存");
        const type = mime.getType(staticPath);
        res.writeHead(200, {
          "content-type": type,
          "cache-control": "public, max-age=3600",
        });
        res.end(data);
      }
    });
  }
});
server.listen(80); // 监听端口80
