import express from "express";
const router = express.Router();

router.post("/list", (req, res) => {
  res.set("selfHeader", "sakura"); //自定义响应头
  res.setHeader("Access-Control-Expose-Headers", "selfHeader"); //设置允许自定义响应头
  res.json({
    code: 200,
    msg: "success",
  });
});

export default router;
