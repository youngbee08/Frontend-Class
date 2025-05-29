import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthContext'
const Home = () => {
  const {user} = useContext(authContext);
  return (
    <div>
      <h1>Hi,{user.name}!</h1> 
      <h1>Home Page</h1>
    </div>
  )
}

export default Home