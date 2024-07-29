import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  setInterval(() => {
    res.write("event:selfName\n"); //默认是message
    // 发送当前时间
    res.write("data: " + new Date() + "\n\n");
  }, 5000);
});

export default router;
