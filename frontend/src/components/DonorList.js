import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch donor data from the server
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/donors`); // Assumes API route to get all donors
        setDonors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching donor data');
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Donor List</h2>

      {/* Add Donor Button */}
      <Link to="/admin/donors/addDonor">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 inline-block">
          Add Donor
        </button>
      </Link>

      {/* Donor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">Donor Name</th>
              <th className="text-left py-3 px-4">Phone Number</th>
              <th className="text-left py-3 px-4">Email ID</th>
              <th className="text-left py-3 px-4">PAN Number</th>
            </tr>
          </thead>
          <tbody>
            {donors.length > 0 ? (
              donors.map((donor) => (
                <tr key={donor._id} className="bg-gray-100 hover:bg-gray-200 transition duration-300">
                  <td className="text-left py-3 px-4">{donor.donorName}</td>
                  <td className="text-left py-3 px-4">{donor.phoneNo}</td>
                  <td className="text-left py-3 px-4">{donor.emailId}</td>
                  <td className="text-left py-3 px-4">{donor.panNo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-3 text-gray-600">No donors found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorList;
