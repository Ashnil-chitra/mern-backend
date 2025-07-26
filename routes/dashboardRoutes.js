const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Contact = require('../models/Contact'); // if you created contact form schema


router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalContacts = await Contact.countDocuments();
    const totalProjects = await Project.countDocuments();

    res.json({
      users: totalUsers,
      contacts: totalContacts,
      projects: totalProjects
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stats' });
  }
});

module.exports = router;
