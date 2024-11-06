const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  identityProof: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
}, { timestamps: true });

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
