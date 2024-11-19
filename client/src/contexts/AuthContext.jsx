import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
          try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/auth`, {
              method: 'GET',
              credentials: 'include', // Sends cookies to the backend
            });
    
            if (res.ok) {
              const data = await res.json();
              // console.log(data)
              setUser(data.user)
              console.log(data.user.admin)
              setIsAdmin(!!data.user.admin)
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

      const logIn = (userData) => {
        setUser(userData)
        setIsAuthenticated(true)
        navigate('/ious')
      }

      const logOut = async () => {
        try {
          await fetch(`${import.meta.env.VITE_API_URL}api/users/logout`, {
              method: 'GET',
              credentials: 'include',
          })
      } catch(error) {
          console.error('Error during logout:', error)
      }
        setUser(null)
        setIsAuthenticated(false)
        navigate('/')
      }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, isAdmin, loading, logIn, logOut }}>
        {children}
    </AuthContext.Provider>
  )
}