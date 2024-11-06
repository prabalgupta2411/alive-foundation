const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: false,
  },
  emailId: {
    type: String,
    required: false,
  },
  panNo: {
    type: String,
    required: false,
  },
});

const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;
