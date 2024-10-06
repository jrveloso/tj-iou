import { useEffect, useState } from "react"
import React from 'react'

const Home = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5003/api/users/auth', {
          method: 'GET',
          credentials: 'include',
        })
        
        const data = await res.json()
        
          setUser(data.user)
        
      } catch(error) {
        console.log('No user logged in')
      }
    }
    fetchUser()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <h2>Welcome {user.username}</h2>
      ) : (
        <span>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </span>
      )
    }
    </div>
  )
}

export default Home