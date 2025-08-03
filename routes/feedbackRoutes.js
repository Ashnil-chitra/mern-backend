const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// Get all feedbacks
router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
});

// Post new feedback
router.post("/", async (req, res) => {
  const newFeedback = new Feedback(req.body);
  await newFeedback.save();
  res.json(newFeedback);
});

module.exports = router;
