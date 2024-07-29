import nodemailer from "nodemailer";
import yaml from "js-yaml";
import http from "node:http";
import fs from "node:fs";
import url from "node:url";
const mailConfig = yaml.load(fs.readFileSync("./mail.yaml", "utf8"));

const transport = nodemailer.createTransport({
  service: "qq",
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user: "1249835860@qq.com",
    pass: "hvtlbbiedhzsiagj",
  },
});

http
  .createServer(async (req, res) => {
    const { pathname } = url.parse(req.url);
    const { method } = req;
    if (method === "POST" && pathname === "/send/mail") {
      let mailInfo = "";
      req.on("data", (chunk) => {
        mailInfo += chunk.toString();
      });
      req.on("end", () => {
        const body = JSON.parse(mailInfo);
        transport.sendMail({
          to: body.to,
          from: mailConfig.user,
          subject: body.subject,
          text: body.text,
        });
        res.end("ok");
      });
    }
  })
  .listen(3000, () => {
    console.log("listen on port 3000");
  });
