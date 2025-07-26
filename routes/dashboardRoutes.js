const express = require('express');
const router = express.Router();
const User = require('../models/User');
// const Contact = require('../models/Contact');
// const Project = require('../models/Project');

router.get('/stats', async (req, res) => {
  try {
    console.log("Fetching stats..."); // log start
    const totalUsers = await User.countDocuments();
    console.log("User count:", totalUsers); // log user count

    const totalContacts = 0;
    const totalProjects = 0;

    res.json({
      users: totalUsers,
      contacts: totalContacts,
      projects: totalProjects
    });
  } catch (err) {
    console.error("Error in /dashboard/stats:", err); // log error
    res.status(500).json({ message: 'Error fetching stats' });
  }
});

module.exports = router;
