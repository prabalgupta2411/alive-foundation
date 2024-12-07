import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/volunteers/all`);
        setVolunteers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching volunteers');
        setLoading(false);
      }
    };
    fetchVolunteers();
  }, []);

  const handleViewIdentityProof = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const handleDeleteVolunteer = async (id) => {
    if (window.confirm('Are you sure you want to delete this volunteer?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API}/api/volunteers/${id}`);
        setVolunteers(volunteers.filter((vol) => vol._id !== id)); // Update state after deletion
      } catch (error) {
        alert('Error deleting volunteer');
      }
    }
  };

  const handleUpdateVolunteer = (id) => {
    // Redirect to the update form with the volunteer ID
    window.location.href = `/admin/Volunteers/addVolunteer/${id}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-end mb-4">
        <Link to="/admin/Volunteers/addVolunteer">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
            Add Volunteer
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-50">
        {volunteers.length > 0 ? (
          volunteers.map((volunteer) => (
            <div key={volunteer._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold">{volunteer.name}</h3>
              <p className="text-gray-600">Phone: {volunteer.phoneNo}</p>
              <p className="text-gray-600">Email: {volunteer.email}</p>

              <button
                onClick={() => handleViewIdentityProof(volunteer)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                View Identity Proof
              </button>

              {/* Update Button */}
              <button
                onClick={() => handleUpdateVolunteer(volunteer._id)}
                className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Update
              </button>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteVolunteer(volunteer._id)}
                className="mt-2 bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>No volunteers found.</div>
        )}
      </div>

      {selectedVolunteer && (
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{selectedVolunteer.name}'s Identity Proof</h3>
            <img
              className="w-full h-48 object-cover"
              src={selectedVolunteer.identityProof}
              alt={selectedVolunteer.name}
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <button
              onClick={() => setSelectedVolunteer(null)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerList;
