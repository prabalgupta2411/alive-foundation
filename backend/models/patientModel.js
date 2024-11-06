const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required'],
    validate: {
      validator: (value) => value < new Date(),
      message: 'Date of birth must be in the past',
    },
  },
  description: {
    type: String,
    required: [true, 'Patient description is required'],
    trim: true,
  },
  image: {
    type: String,
    default: '', // Stores the path to the uploaded image file
  },
  pdf: {
    type: String,
    default: '', // Stores the path to the uploaded PDF file
  },
  amountRaised: {
    type: Number,
    default: 0, // Default amount raised
  },
  numDonors: {
    type: Number,
    default: 0, // Default number of donors
  },
  donationGoal: {
    type: Number,
    required: [true, 'Donation goal is required'], // Donation goal for the patient
  },
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
