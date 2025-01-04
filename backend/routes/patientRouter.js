const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinaryConfig');
const Patient = require('../models/patientModel');

const router = express.Router();

// Multer setup to handle file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route to save patient data and upload image and PDF to Cloudinary
router.post('/', upload.fields([{ name: 'image' }, { name: 'pdf' }]), async (req, res) => {
  try {
    const { name, dob, description, amountRaised, numDonors, donationGoal } = req.body;

    // Check required fields
    if (!name || !dob || !donationGoal) {
      return res.status(400).json({ message: 'Name, DOB, and Donation goal are required' });
    }

    const sanitizedPatientName = name.trim().replace(/\s+/g, '-'); // Sanitize name for Cloudinary folder
    const cloudinaryFolder = `patients/${sanitizedPatientName}`;

    // Upload image to Cloudinary
    let imageUrl = '';
    if (req.files.image) {
      const uploadImage = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: `${cloudinaryFolder}`, resource_type: 'image' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        ).end(req.files.image[0].buffer);
      });
      imageUrl = uploadImage;
    }

    // Upload PDF to Cloudinary
    let pdfUrl = '';
    if (req.files.pdf) {
      const uploadPdf = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: `${cloudinaryFolder}`, resource_type: 'auto' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        ).end(req.files.pdf[0].buffer);
      });
      pdfUrl = uploadPdf;
    }

    // Create a new patient record
    const newPatient = new Patient({
      name,
      dob,
      description,
      image: imageUrl,
      pdf: pdfUrl,
      amountRaised: amountRaised || 0,
      numDonors: numDonors || 0,
      donationGoal,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json({ message: 'New patient created successfully', patient: savedPatient });

  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to fetch all patients
router.get('/all', async (req, res) => {
  try {
    const patients = await Patient.find().sort({ createdAt: -1 });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: Unable to fetch patients' });
  }
});

// GET route to fetch all patient names
router.get('/name', async (req, res) => {
  try {
    const patients = await Patient.find({}, 'name');
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve patients' });
  }
});

module.exports = router;
