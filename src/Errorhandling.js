import React from "react";
import { useState } from "react";
function Errorhandling({data}){
    console.log(data)
    const[value,setValue]=useState({
        name:"",
        email:"",
        number:""
    })
    const[error,setError]=useState({
        nameError:"",
        emailError:"",
        numberError:""
    })

    function change(event){
        setValue(
            {
                ...value,
                [event.target.name]:event.target.value
            }
        )
    }
    function handleSubmit(event){
        event.preventDefault()
        if(value.name==""){
            setError({
                ...error,
                nameError:"The field is required"
            })
        }
        else  if(value.name.length<3){
            
            setError({
                ...error,
                nameError:"enter above 3 characters"
            })
        }
        
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input typr="text" placeholder="Enter name" name="name" onChange={change}></input><br/>
        <span style={{color:"red"}}>{error.nameError}</span><br/>
 <input typr="email" placeholder="Enter email" name="email" onChange={change}></input><br/>
         <input typr="number" placeholder="Enter number" name="number" onChange={change}></input><br/>
         <button type="submit">submit</button>
</form>
        </>
    )
}
export default Errorhandling