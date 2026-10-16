import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Getdata = () => {

    const[data,setData]=useState([])

    useEffect(()=>{
    axios.get("http://localhost:5000/whether")
    .then((res)=>console.log(res.value))
  },[])

  return (
    <>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Id</td>
            </tr>
        </thead>
    </table>
    <div>
      {
        data.map((i)=>{
            return(
                <>
                   <tbody>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.id}</td>
                   </tbody>
                </>
            )

        })
      }
    </div>
    </>
  )
}

export default Getdata