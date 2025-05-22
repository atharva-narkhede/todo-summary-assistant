const express = require("express");
const router = express.Router();
const db = require("../firebase/firebaseConfig");
const { summarizeTodos } = require("../services/cohereService");
const { sendToSlack } = require("../services/slackService");

// POST /summarize
router.post("/", async (req, res) => {
  try {
    const snapshot = await db.collection("todos").get();
    const todos = snapshot.docs.map(doc => doc.data().text);

    if (todos.length === 0)
      return res.status(400).json({ error: "No todos to summarize" });

    const summary = await summarizeTodos(todos, process.env.COHERE_API_KEY);
    await sendToSlack(summary, process.env.SLACK_WEBHOOK_URL);

    res.json({ success: true, summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to summarize or send to Slack" });
  }
});

module.exports = router;
