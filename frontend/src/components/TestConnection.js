import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Sending a request to the backend to test connection
    axios.get(`${process.env.REACT_APP_API}/api/test`)
      .then((response) => {
        setMessage(response.data.message);  // Set the message from backend
      })
      .catch((error) => {
        setMessage('Error: Could not connect to the backend');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default TestConnection;
