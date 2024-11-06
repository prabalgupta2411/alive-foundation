import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS

const AddDonor = () => {
  const [donorName, setDonorName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [panNo, setPanNo] = useState('');
  
  // State for success and error messages (now handled by Toastify)
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDonor = {
        donorName,
        phoneNo,
        emailId,
        panNo,
      };
      await axios.post(`${process.env.REACT_APP_API}/api/donors/add`, newDonor);  // Make the API request to add the donor
      setSuccess('Donor added successfully!');
      setError(null);

      // Show success notification using Toastify
      toast.success('Donor added successfully!');
    } catch (err) {
      setError('Error adding donor');
      setSuccess(null);

      // Show error notification using Toastify
      toast.error('Error adding donor');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add New Donor</h2>

      {/* Optionally show success and error notifications */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Donor Name:</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email ID:</label>
          <input
            type="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">PAN Number:</label>
          <input
            type="text"
            value={panNo}
            onChange={(e) => setPanNo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Donor
        </button>
      </form>
    </div>
  );
};

export default AddDonor;
