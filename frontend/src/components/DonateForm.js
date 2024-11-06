import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonateForm = () => {
  const [donorName, setDonorName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [patientName, setPatientName] = useState('');
  const [volunteerName, setVolunteerName] = useState('');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [volunteers, setVolunteers] = useState([]);
  const [patients, setPatients] = useState([]);

  // Fetch volunteers and patients on mount
  useEffect(() => {
    const fetchVolunteers = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/volunteers/name`);
      setVolunteers(response.data);
    };

    const fetchPatients = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/patients/name`);
      setPatients(response.data);
    };

    fetchVolunteers();
    fetchPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationData = {
      donorName,
      phone,
      email,
      pan,
      patientName,
      volunteerName,
      note,
      amount,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API}/api/transactions/donate`, donationData);
      alert('Donation submitted successfully!');
      // Clear form fields after submission
      setDonorName('');
      setPhone('');
      setEmail('');
      setPan('');
      setPatientName('');
      setVolunteerName('');
      setNote('');
      setAmount('');
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-6 bg-white shadow-lg rounded-lg text-black">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Donation Form</h2>

      <div className="space-y-2">
        <label htmlFor="donorName" className="text-sm font-semibold text-gray-600">Donor Name</label>
        <input
          type="text"
          id="donorName"
          placeholder="Enter Donor Name"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-semibold text-gray-600">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="pan" className="text-sm font-semibold text-gray-600">PAN No</label>
        <input
          type="text"
          id="pan"
          placeholder="Enter PAN Number"
          value={pan}
          onChange={(e) => setPan(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="patientName" className="text-sm font-semibold text-gray-600">Select Patient</label>
        <select
          id="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Patient</option>
          {patients.map((patient) => (
            <option key={patient._id} value={patient.name}>
              {patient.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="volunteerName" className="text-sm font-semibold text-gray-600">Select Volunteer</label>
        <select
          id="volunteerName"
          value={volunteerName}
          onChange={(e) => setVolunteerName(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Volunteer</option>
          {volunteers.map((volunteer) => (
            <option key={volunteer._id} value={volunteer.name}>
              {volunteer.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="note" className="text-sm font-semibold text-gray-600">Note</label>
        <textarea
          id="note"
          placeholder="Enter a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm font-semibold text-gray-600">Amount (in Rs.)</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Proceed to Help
      </button>
    </form>
  );
};

export default DonateForm;
