const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  volunteerName: { type: String, required: false },
  donorName: { type: String, required: false },
  patientName: { type: String, required: false },
  amount: { type: Number, required: true },
  dateDonated: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' }, // Status managed by admin
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
