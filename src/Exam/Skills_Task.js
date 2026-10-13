import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './Skills_Task.css'

function Skills_Task() {
  const[value,setValue]=useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/c/dee5-570c-4565-bc01")
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
  
    <h1>MY SkillS</h1>
       
  {value.skills?.map((skill) => (
       <div className='Bot'> <p >{skill}</p></div>
      ))}


    </>
  )
}

export default Skills_Task