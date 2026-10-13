import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Contact_Task.css'
function Contact_Task() {
  const[con,setCon]=useState("")
  useEffect(()=>{
    axios.get("https://dummyjson.com/c/dee5-570c-4565-bc01")
    .then((i)=>{
      setCon(i.data)
      console.log(i.data)
       })
      .catch((err)=>{
        console.log(err)
    
    })
  },[])
  return (
    <>
    <h1>Contact</h1>
    <div className='Pr'>
    <div className='cat'><p>Name:{con.name}</p></div>
     <div className='Rat'>    <p>Role:{con.role}</p></div> 
      <div className='Bat'> <p>About:{con.about}</p></div> 
        </div>
    </>
  )
}

export default Contact_Task