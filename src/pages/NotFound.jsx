import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:"1rem",
        margin:"1rem auto"
    }}>
        <img src="https://media.istockphoto.com/id/1011853308/vector/page-not-found.jpg?s=612x612&w=0&k=20&c=pS_I2TmBhXl7aaOW-0iGo_DgFj6xrSn82I7CwmXUwL4=" alt="" />
        <Link to="/"><i className='fas fa-arrow-left'></i> Back To Home</Link>
    </div>
  )
}

export default NotFound