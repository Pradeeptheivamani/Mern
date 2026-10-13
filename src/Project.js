import React, { useState } from "react"

import './Project.css'

const Project=()=>{
 const[form,setForm]=useState({
         id:0,
         name:"",
         mark:0,
         dept:"",
         age:0
        });
        const[value,setValue]=useState({
         id:1,
         name:"pradeep",
         mark:50,
         dept:"cse",
         age:30
        });
      /*  const[input,setInput]=useState("")
        const[email,setEmail]=useState("")
        const[age,setAge]=useState("")
        function root(){
         //setValue(value ==0 ?1:0)
         setValue(!value)
        }
        //function getdata(n){
         //setInput(n.target.value)
        //}
        function rigister(event){
          setInput(event.target.value)

        }
        function handlerigister(event){
          event.preventDefault();
          alert(input)
          alert(email)
          alert(age)
        }
        function emailhandle(event){
             setEmail(event.target.value)
        }
        function agehandle(event){
          setAge(event.target.value)
        }*/
       function change(event){
         setValue({
           ...value,
           [event.target.name]:event.target.value
           
         })
       }
       function submit(event){
         event.preventDefault(); 
         setForm({
           ...form,
           name:value.name,
           age:value.age
         })
       }

 return(
     <>
     <div>

     <h1>Hello</h1>
     {form.age}

  <form  onSubmit={submit}>
    
    Name: <input onChange={change}  name={"name"}placeholder="Enter your Name"/>  <br/>
    Email: <input  placeholder="Enter your Email"  /><br/>
    Age:   <input onChange={change} placeholder="Enter you age" name={"age"} /><br/> 
     <button type="submit">submit</button>
       </form>

  </div>
     </>
 )
}
export default Project
