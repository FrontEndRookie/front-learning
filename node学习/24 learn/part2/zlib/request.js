const zlib = require("zlib");
const http = require("node:http");
const server = http.createServer((req, res) => {
  const txt = "yingshu".repeat(1000);

  res.setHeader("Content-Encoding", "gzip");
  //   res.setHeader("Content-Encoding", "deflate");
  res.setHeader("Content-type", "text/plan;charset=utf-8");
  const result = zlib.gzipSync(txt);
  //   const result = zlib.deflateSync(txt);
  res.end(txt);
});

server.listen(3000);
