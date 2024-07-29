import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    code: 200,
    msg: "success",
  });
});

router.post("/register", (req, res) => {
  res.json({
    code: 200,
    msg: "success",
  });
});

export default router;
