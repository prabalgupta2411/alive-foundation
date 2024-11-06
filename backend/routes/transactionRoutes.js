const express = require('express');
const Transaction = require('../models/transactionModel');
const router = express.Router();
const Donor = require('../models/donorModel');
const { getTransactions, updateTransactionStatus } = require('../controllers/transactionController');

// Create a new transaction (Donor Entry)
router.post('/donate', async (req, res) => {
  const { volunteerName, donorName, patientName, amount, phone, email, pan, note } = req.body;

  try {
    let existingDonor;

    // Check if donor details are provided
    if (donorName) {
      // Check if the donor already exists
      existingDonor = await Donor.findOne({ $or: [{ emailId: email }, { phoneNo: phone }, { panNo: pan }] });

      if (!existingDonor) {
        // Create a new donor only if they don't exist and all details are provided
        existingDonor = new Donor({
          donorName,
          phoneNo: phone,
          emailId: email,
          panNo: pan,
        });
        await existingDonor.save(); // Save new donor
      }
    }

    // Create a new transaction regardless of donor existence
    const newTransaction = new Transaction({
      volunteerName,
      donorName,
      patientName,
      amount,
      note,
    });

    await newTransaction.save(); // Save the transaction

    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (error) {
    console.error('Error creating transaction or donor:', error);
    res.status(500).json({ message: 'Error creating transaction or donor', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete transaction', error: error.message });
  }
});


router.get('/', getTransactions);
router.put('/:id', updateTransactionStatus);

module.exports = router;
