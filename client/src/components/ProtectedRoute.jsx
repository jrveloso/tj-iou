import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:5003/api/users/auth', {
          method: 'GET',
          credentials: 'include', // Sends cookies to the backend
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data)
          setIsAuthenticated(!!data.user); // Set to true if user exists
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        console.error("Error registering:", error.message);
        setIsAuthenticated(false)
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
