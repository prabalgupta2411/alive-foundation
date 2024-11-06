const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/adminModel'); // Path to your Admin model
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Here you could implement token generation (JWT) if needed
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


router.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ username });
      if (existingAdmin) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
      }
  
      // Create new admin
      const newAdmin = new Admin({ username, password });
      await newAdmin.save();
  
      res.status(201).json({ success: true, message: 'Admin registered successfully' });
    } catch (error) {
      console.error('Error registering admin:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  

module.exports = router;
