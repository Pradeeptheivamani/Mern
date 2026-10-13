import React from 'react'
import { Link } from 'react-router'
import './Home_Task.css'
function Home_Task() {
    const data=[{
        id:"165",
        name:"pradeep",
       username:"pradeep@123",
       contact:"7358687932",
       Role:"Student",
       skill:['java','python','javaScript'],
       email:"pradeeptheivamanI@gmail.com",
       location:"Rasipuram",
       about:"Software Developer",
       project:[{Title:"AgriNova" ,Description:"detect the plant Dieses"}],
       social:{},
       Accordian:[{}]

    }]
  return (
    <>
    <div className='top'>
                <div className='Dot'>
             <h1>Hello, I'm Pradeep  </h1>
                <h1> Software Developer</h1>
                 </div>
                         <div className='Bot'>
                            <h3>
                              let's connect and Explore My projects
                            </h3>
                          </div>
    
    </div>
    </>
  )
}

export default Home_Task