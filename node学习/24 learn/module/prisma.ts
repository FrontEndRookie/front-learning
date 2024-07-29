import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

//新增
router.post("/create", async (req, res) => {
  const { name, email } = req.body;
  const data = await prisma.user.create({
    data: {
      name: name,
      email: email,
      posts: {
        create: [
          {
            title: "文章1",
            content: "neirong1",
          },
        ],
      },
    },
  });
  res.send(data);
});

router.get("/", async (req, res) => {
  const data = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  res.send(data);
});

router.get("/user/:id", async (req, res) => {
  const row = await prisma.user.findMany({
    where: {
      id: Number(req.params.id),
    },
  });
  res.send(row);
});

router.post("/update", async (req, res) => {
  const { id, name, email } = req.body;
  const data = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
    },
  });
  res.send(data);
});

router.post("/delete", async (req, res) => {
  const { id } = req.body;
  await prisma.post.deleteMany({
    where: {
      authorId: Number(id),
    },
  });
  const data = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.send(data);
});
export default router;
