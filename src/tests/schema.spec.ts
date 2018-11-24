import { NumberColumn, StringColumn } from "@/core/Column";
import { Database } from "@/core/Database";
import { Table } from "@/core/Table";

const userTable = new Table("users", [new StringColumn("name"), new NumberColumn("age")]);
const postTable = new Table("posts", [new StringColumn("title"), new StringColumn("content")]);

test("数据库与表结构基本使用测试", () => {
  const db = new Database();
  expect(db.listTableNames()).toEqual([]);
  db.addTable(userTable);
  expect(db.getTableByName("users")).toBe(userTable);
  db.addTable(postTable);
  expect(db.getTableByName("posts")).toBe(postTable);
  expect(db.listTableNames()).toMatchObject(["users", "posts"]);
  expect(db.deleteTableByName("notatablename")).toEqual(false);
  expect(db.getTableByName("notatablename")).toBe(undefined);
  expect(db.deleteTableByName("users")).toEqual(true);
  expect(db.getTableByName("users")).toBe(undefined);
  expect(db.listTableNames().length).toBe(1);
});
