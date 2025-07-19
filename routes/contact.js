const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error in contact route:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
