import react from "react";
import { useState } from "react";
function Top(){
    const[value,setValue]=useState("")
    const[root,setRoot]=useState(true)
    const student=[{
        name:"pradeep",
        age:20,
        Course:"cse"
},{name:"kumar",
        age:10,
        Course:"mca"}]
const datamark=student.filter((i)=>i.age>18)
    console.log(datamark);

      function light(){
    setRoot(root)
      }
  
     function plus(){
        setValue(value+1);
        
    }
    function minus(){
        setValue(value-1);
        
    }
    function reset(){
        setValue(value);
    
    }
  
    return(
        <>
        {student.map((res)=>{
            return(
                <>
                {res.name}
                </>
            )
        })}
    <div> Name:  <input placeholder="Enter your name"></input><br/>
      Age:  <input placeholder="Enter your Age"></input><br/>
       Course: <input placeholder="Enter you course"></input><br/>
       <button onSubmit={student}>submit</button></div>
 
    <div> <button onClick={plus}>plus</button> </div>  
     <div> <button onClick={plus}>minus</button> </div>  
      <div> <button onClick={plus}>reset</button> </div> 
      {root} 
       <div style={{backgroundColor:root?"#FF7519":"#FAFAFA",height:"1000vh"}}>
           <button onClick={light}>{root?"🔆":"🌙"}</button></div>

       {datamark.map((i)=>{
            return (
                <>
                {i.name}
                </>
            )
          })}
        </>
    )
}
export default Top