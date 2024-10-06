import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:5003/api/users/logout', {
                method: 'GET',
                credentials: 'include',
            })

            if(response.ok) {
                navigate('/')
            } else {
                console.error('Logout failed')
            }
        } catch(error) {
            console.error('Error during logout:', error)
        }
    }

    useEffect(() => {
        handleLogout()
    }, [])
  return (
    <div>Logging out...</div>
  )
}

export default LogOut