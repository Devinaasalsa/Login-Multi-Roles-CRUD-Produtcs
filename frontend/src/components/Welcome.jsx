import React from 'react'
import { useSelector } from 'react-redux'
import "../style.css"
import imageDashboard from "../silky.png"

const Welcome = () => {
  const {user}=useSelector((state)=>state.auth)
  return (
    <div className='content'>
    <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle'>
          Welcome Back <strong>{user && user.name}</strong>
          </h2>
          <div className='imgdashboard'>
          <img src={imageDashboard} alt="" width="400px" className='is-centered'/>
          </div>
    </div>
  )
}

export default Welcome