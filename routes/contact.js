const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Submit contact form
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ GET: Fetch all contact form data
router.get("/", async (req, res) => {
  try {
    const allContacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(allContacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
