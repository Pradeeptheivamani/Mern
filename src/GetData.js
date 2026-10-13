import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Getdata = () => {

    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/d95d-2150-4ca1-bbd3")
        .then((res)=>{setData(res.data)})
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