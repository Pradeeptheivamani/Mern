import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Nex() {
    const [data, setData] = useState({});
        
  useEffect(() => {
    axios.get("https://dummyjson.com/c/e2d7-5698-4370-bbf7")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  return (
    <>
    <div>Nex</div>
    <input typr="text" placeholder="Enter name" ></input><br/>
       
       {data.username}
         <input type="password" placeholder="Enter password" ></input><br/>
          
          {data.password}
         <button type="submit">submit</button>


   </> 
  )
}

export default Nex