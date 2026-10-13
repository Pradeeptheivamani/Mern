import React from "react";
import { useState } from "react";
function Tom(){
    const[value,setvalue]=useState([
     { name: "Reading Books",completed:true},
      { name: "Go to College",completed:false},
       { name:"complete homework",completed:true}
    ])
    function root(task){
        setvalue(value)
    }
     const datamark=value.filter((m)=>m.completed==true)
    console.log(datamark);
    function base(){
        
    }

    return(
        <>
        <h1>Task Manager</h1>
        <input type="text" placeholder="Enter your Task"></input>
          {datamark.map((i, index) => (
    <p key={index}>{i.name}</p>
))}
<button onClick={datamark}>Completed</button>
        </>
    )
}
export default Tom