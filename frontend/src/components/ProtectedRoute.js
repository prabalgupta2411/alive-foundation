// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Correctly import the context

const ProtectedRoute = ({ element }) => {
  const { isAdminAuthenticated } = useContext(AuthContext); // use the correct context

  return isAdminAuthenticated ? element : <Navigate to="/secretAdmin" />;
};

export default ProtectedRoute;
