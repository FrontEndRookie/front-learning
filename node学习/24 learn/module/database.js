import express from "express";
import fs from "node:fs";
import jsyaml from "js-yaml";
import mysql2 from "mysql2/promise";
import knex from "knex";
const router = express.Router();

const yaml = fs.readFileSync("./db.config.yaml", "utf8");
// console.log(yaml);
const config = jsyaml.load(yaml);
// console.log({ ...config.db });
// const sql = await mysql2.createConnection({ ...config.db });
const db = knex({
  client: "mysql2",
  connection: config.db,
});

// db.schema
//   .createTable("list", (table) => {
//     table.increments("id"); //id自增
//     table.integer("age"); //age 整数
//     table.string("name"); //name 字符串
//     table.string("hobby"); //hobby 字符串
//     table.timestamps(true, true); //创建时间和更新时间
//   })
//   .then(() => {
//     console.log("创建成功");
//   });

router.get("/", async (req, res) => {
  //   const [data] = await sql.query("select * from users");
  const data = await db("list").select().orderBy("id", "desc");
  const count = await db("list").count("* as total");
  //   res.send(data);
  // db.raw("select * from list").then((data) => {
  //   console.log(data);
  // });
  const uniTable = await db("users")
    .select()
    .leftJoin("userData", "users.id", "userData.user_id");
  res.json({
    data: uniTable,
    count: count[0].total,
    sql: db("list").select().toSQL().sql,
  });
});

//单个查询
router.get("/user/:id", async (req, res) => {
  // const [data] = await sql.query("select * from users WHERE id = ?", [
  //   req.params.id,
  // ]);
  const data = await db("list").select().where({ id: req.params.id });
  res.send(data);
});

//新增
router.post("/create", async (req, res) => {
  const { name, age, hobby } = req.body;
  //   await sql.query("insert into users (name,age,hobby) values (?,?,?)", [
  //     name,
  //     age,
  //     hobby,
  //   ]);
  await db("list").insert({ name, age, hobby });
  res.send("新增成功");
});

//编辑
router.post("/update", async (req, res) => {
  const { name, age, hobby, id } = req.body;
  //   await sql.query("update users set name=?,age=?,hobby=? where id=?", [
  //     name,
  //     age,
  //     hobby,
  //     id,
  //   ]);
  await db("list").update({ name, age, hobby }).where({ id });
  res.send("修改成功");
});

//删除
router.post("/delete", async (req, res) => {
  // await sql.query("delete from users where id=?", [req.body.id]);
  await db("list").delete().where({ id: req.body.id });
  res.send("删除成功");
});
export default router;
