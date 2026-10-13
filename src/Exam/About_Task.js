
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './About_Task.css'
function About_Task() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("https://dummyjson.com/c/dee5-570c-4565-bc01")
      .then((i) => {
        setData(i.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <div className='Bot'> <h1>About Me</h1></div> 
     <div className='Top'> <h2>{data.name}</h2>
      <h3>{data.role}</h3>
      <p>{data.about}</p></div>
    </>
  )
}

export default About_Task