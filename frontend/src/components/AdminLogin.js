import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify'; // Import both toast and ToastContainer
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const AdminLogin = () => {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/admin/login`, { username, password });
      if (response.data.success) {
        login(); // Mark the user as authenticated

        // Show success toast first
        toast.success('Login successful!'); // Success Toast
        
        // Navigate after a small delay to make sure the toast is visible
        setTimeout(() => {
          navigate('/'); // Redirect to the homepage after successful login
        }, 1000); // Add a 1-second delay (adjust as needed)
      } else {
        setError(response.data.message);
        toast.error(response.data.message); // Error Toast with the server's message
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Login failed. Please check your credentials.');
      toast.error('Login failed. Please check your credentials.'); // Error Toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded-lg w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      {/* ToastContainer to show the toasts */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default AdminLogin;
