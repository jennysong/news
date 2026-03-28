const express = require("express");
const { getTopics } = require("../services/newsService");

const router = express.Router();

router.get("/", (_req, res) => {
  try {
    const data = getTopics();
    res.json(data);
  } catch (err) {
    console.error("Failed to fetch topics:", err);
    res.status(500).json({ error: "Failed to fetch topics" });
  }
});

module.exports = router;
