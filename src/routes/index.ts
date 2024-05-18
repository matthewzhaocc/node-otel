import { Router } from "express";

const router = Router();

const database: any[] = [];

router.get("/", (req, res) => {
  res.json(database);
});

router.post("/", (req, res) => {
  const { body } = req;
  database.push(body);
  res.json(body);
});

router.delete("/", (req, res) => {
  database.splice(0, database.length);
  res.json({ message: "All items deleted" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = database[parseInt(id)];
  res.json(item);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  database.splice(parseInt(id), 1);
  res.json({ message: "Item deleted" });
});

export default router;
