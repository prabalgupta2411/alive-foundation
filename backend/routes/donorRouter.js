const express = require('express');
const router = express.Router();
const Donor = require('../models/donorModel'); // Import the Donor model

// Route to get all donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find(); // Fetch all donors from the database
    res.status(200).json(donors);
  } catch (error) {
    console.error('Error fetching donors:', error);
    res.status(500).json({ message: 'Error fetching donors', error });
  }
});

router.post('/add', async (req, res) => {
  const { donorName, phoneNo, emailId, panNo } = req.body;

  try {
    const newDonor = new Donor({
      donorName,
      phoneNo,
      emailId,
      panNo,
    });
    await newDonor.save();
    res.status(201).json({ message: 'Donor added successfully' });
  } catch (error) {
    console.error('Error adding donor:', error);
    res.status(500).json({ message: 'Error adding donor', error });
  }
});

module.exports = router;
