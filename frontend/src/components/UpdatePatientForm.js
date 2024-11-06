import React, { useState } from 'react';
import axios from 'axios';

const UpdatePatientForm = ({ patient }) => {
  const [name, setName] = useState(patient ? patient.name : '');
  const [dob, setDob] = useState(patient ? patient.dob : ''); // Date of Birth state
  const [description, setDescription] = useState(patient ? patient.description : '');
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [amountRaised, setAmountRaised] = useState(patient ? patient.amountRaised : 0); // Amount Raised state
  const [donationGoal, setDonationGoal] = useState(patient ? patient.donationGoal : 0); // Donation Goal state
  const [numDonors, setNumDonors] = useState(patient ? patient.numDonors : 0); // Number of Donors state

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePdfChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('dob', dob); // Add date of birth to form data
    formData.append('description', description);
    formData.append('image', image);
    formData.append('pdf', pdf);
    formData.append('amountRaised', amountRaised); // Add amount raised to form data
    formData.append('donationGoal', donationGoal); // Add donation goal to form data
    formData.append('numDonors', numDonors); // Add number of donors to form data

    try {
      if (patient && patient._id) {
        await axios.put(`${process.env.REACT_APP_API}/api/patients/${patient._id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Patient updated successfully!');
      } else {
          await axios.post(`${process.env.REACT_APP_API}/api/patients`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('New patient created successfully!');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        {patient ? 'Update Patient' : 'Create Patient'}
      </h2>

      {/* Name input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date of Birth input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Amount Raised input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Amount Raised:</label>
        <input
          type="number"
          value={amountRaised}
          onChange={(e) => setAmountRaised(Number(e.target.value))}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Donation Goal input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Donation Goal:</label>
        <input
          type="number"
          value={donationGoal}
          onChange={(e) => setDonationGoal(Number(e.target.value))}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Number of Donors input */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Number of Donors:</label>
        <input
          type="number"
          value={numDonors}
          onChange={(e) => setNumDonors(Number(e.target.value))}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Image upload */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="p-1" />
      </div>

      {/* PDF upload */}
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">Upload PDF:</label>
        <input type="file" accept="application/pdf" onChange={handlePdfChange} className="p-1" />
      </div>

      {/* Submit button */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
        {patient ? 'Update Patient' : 'Create Patient'}
      </button>
    </form>
  );
};

export default UpdatePatientForm;
