import express from "express";
import user from "./module/user.js";
import list from "./module/list.js";
import sse from "./module/sse.js";
import database from "./module/database.js";
import dataPrisma from "./module/prisma.ts";
import LoggerMiddleware from "./middleware/logger.js";
import preventHotLingking from "./middleware/preventHotLingking.js";
//接收参数
//get req.query 动态参数 req.params
//post req.body
const app = express();
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());
app.use(LoggerMiddleware);
// app.use(preventHotLingking);
app.use("/assets", express.static("static"));

app.use("/user", user);
app.use("/info", list);
app.use("/sse", sse);
app.use("/sql", database);
app.use("/sqlPrisma", dataPrisma);
app.get("/get", (req, res) => {
  res.send(req.query);
});

app.get("/get/:id", (req, res) => {
  res.send(req.params.id);
});

app.post("/post", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => {});
