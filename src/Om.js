import React from 'react'
import Model from './asset/Model.jpeg'
import './Om.css'

function Om() {
  return (
    <>
      <div className='head'>
      <div className='image-box'>  <img src={Model} alt="Model" /></div>

        <h1>Secure all your devices</h1>

        <h2>
          Ensure your mobile phone, laptop, and other<br />
          devices are protected online.
        </h2>

       <div > <button>Purchase Premium</button></div> 
      </div>
    </>
  )
}

export default Om