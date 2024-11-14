import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const LogOut = () => {
    const { logOut } = useAuth()

    useEffect(() => {
        logOut()
    }, [logOut])
  return (
    <span className="loading loading-spinner loading-lg h-screen flex justify-self-center content-center"></span>
  )
}

export default LogOut