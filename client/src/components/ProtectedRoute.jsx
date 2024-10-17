import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const {isAuthenticated, loading} = useAuth()
  // console.log(isAuthenticated, loading)

  if (loading) return <span className="loading loading-spinner loading-lg"></span>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
