import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
          try {
            const res = await fetch('http://localhost:5003/api/users/auth', {
              method: 'GET',
              credentials: 'include', // Sends cookies to the backend
            });
    
            if (res.ok) {
              const data = await res.json();
              // console.log(data)
              setUser(data.user)
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

  return (
    <AuthContext.Provider value={{user, isAuthenticated, loading}}>
        {children}
    </AuthContext.Provider>
  )
}