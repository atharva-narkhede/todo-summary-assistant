const express = require("express");
const router = express.Router();
const db = require("../firebase/firebaseConfig");

// GET /todos
router.get("/", async (req, res) => {
  const snapshot = await db.collection("todos").get();
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(todos);
});

// POST /todos
router.post("/", async (req, res) => {
  const { text } = req.body;
  const docRef = await db.collection("todos").add({ text });
  res.json({ id: docRef.id });
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await db.collection("todos").doc(id).delete();
  res.sendStatus(204);
});

module.exports = router;
