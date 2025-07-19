const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

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

module.exports = router;
