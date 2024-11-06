const express = require('express');
const router = express.Router();
const multer = require('multer');
const Volunteer = require('../models/volunteerModel');
const cloudinary = require('../config/cloudinaryConfig');

// Multer setup to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Helper function to upload file to Cloudinary and return the URL
const uploadToCloudinary = (fileBuffer, folder, resourceType) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: 'identityProof',
        resource_type: resourceType
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );
    uploadStream.end(fileBuffer);
  });
};

// POST route to save volunteer data and upload identity proof to Cloudinary
router.post('/', upload.single('identityProof'), async (req, res) => {
  try {
    const { name, dob, phoneNo, email } = req.body;

    // Validate required fields
    if (!name || !dob || !phoneNo || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the identityProof file is provided
    if (!req.file) {
      return res.status(400).json({ message: 'Identity proof file is required' });
    }

    // Determine the Cloudinary folder and resource type
    const mimeType = req.file.mimetype;
    const cloudinaryFolder = `volunteers/${name.replace(/\s+/g, '_')}`;
    const resourceType = mimeType.includes('image') ? 'image' : 'raw';

    // Upload the file to Cloudinary and get the secure URL
    const identityProofUrl = await uploadToCloudinary(req.file.buffer, cloudinaryFolder, resourceType);

    // Create new volunteer in the database
    const volunteer = new Volunteer({
      name,
      dob,
      phoneNo,
      email,
      identityProof: identityProofUrl, // Store the Cloudinary URL of the identity proof
    });

    await volunteer.save();
    res.status(201).json({ message: 'Volunteer added successfully', volunteer });

  } catch (error) {
    console.error('Error adding volunteer:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/name', async (req, res) => {
  try {
    const volunteers = await Volunteer.find({}, 'name'); // Only fetch the name
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve volunteers' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    if (!volunteers) {
      return res.status(404).json({ message: 'No volunteers found' });
    }
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving volunteers', error });
  }
});

// DELETE route to remove volunteer data and identity proof from Cloudinary
router.delete('/:id', async (req, res) => {
  try {
    const volunteerId = req.params.id;

    // Find the volunteer by ID
    const volunteer = await Volunteer.findById(volunteerId);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    // Extract the Cloudinary public ID from the identityProof URL
    const identityProofUrl = volunteer.identityProof;
    const publicIdMatch = identityProofUrl.match(/\/([^/]+)\.[a-z]+$/);
    const publicId = publicIdMatch ? `volunteers/${volunteer.name.replace(/\s+/g, '_')}/identityProof` : null;

    if (publicId) {
      // Delete the file from Cloudinary
      await cloudinary.uploader.destroy(publicId, { resource_type: 'auto' });
    }

    // Delete the volunteer from the database
    await Volunteer.findByIdAndDelete(volunteerId);

    res.status(200).json({ message: 'Volunteer and identity proof deleted successfully' });

  } catch (error) {
    console.error('Error deleting volunteer:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
