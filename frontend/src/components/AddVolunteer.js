import React, { useState } from 'react';
import axios from 'axios';

const AddVolunteer = () => {
  const [loading, setLoading] = useState(false);
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    dob: '',
    phoneNo: '',
    email: '',
    identityProof: null,
  });
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateForm = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]{2,50}$/.test(volunteerData.name)) {
      newErrors.name = 'Name should be 2-50 characters long and contain only letters';
    }
    if (!/^\d{10}$/.test(volunteerData.phoneNo)) {
      newErrors.phoneNo = 'Phone number should be 10 digits';
    }
    if (volunteerData.identityProof?.size > 5 * 1024 * 1024) {
      newErrors.identityProof = 'File size should be less than 5MB';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(volunteerData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'identityProof') {
      setVolunteerData({ ...volunteerData, identityProof: files[0] });
    } else {
      setVolunteerData({ ...volunteerData, [name]: value });
    }
    // Clear error when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    const formData = new FormData();
    
    // Append all form data
    Object.entries(volunteerData).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await axios.post(`${process.env.REACT_APP_API}/api/volunteers`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      setVolunteerData({
        name: '',
        dob: '',
        phoneNo: '',
        email: '',
        identityProof: null,
      });
      alert('Volunteer added successfully!');
    } catch (error) {
      const message = error.response?.data?.message || 'Error adding volunteer. Please try again.';
      alert(message);
      console.error('Error adding volunteer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto text-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-4">Add Volunteer</h2>

      <div>
        <label htmlFor="name" className="block text-gray-700">Volunteer Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={volunteerData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="dob" className="block text-gray-700">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={volunteerData.dob}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNo" className="block text-gray-700">Phone No:</label>
        <input
          type="text"
          name="phoneNo"
          id="phoneNo"
          value={volunteerData.phoneNo}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="identityProof" className="block text-gray-700">Identity Proof (Image):</label>
        <input
          type="file"
          name="identityProof"
          id="identityProof"
          onChange={handleChange}
          accept="image/*" // Restrict to image files only
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700">Email ID:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={volunteerData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Add Volunteer
      </button>
    </form>
  );
};

export default AddVolunteer;
