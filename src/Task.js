import react, { useState } from "react";

const Root=()=>{
    const[get,setGet]=useState(true)
    function ex(){
        setGet(!get)
    }
  function addtask(){
    setResult([...result, "New Task"])
}
const [result,setResult]=useState([
          "Prepare Exam",
        "complete the tasks",
        "read the books",
        "Go to temples",
        "check Progress"
])
const[input,setInput]=useState(false)

return(
    <>
    {get}
    <div style={{backgroundColor:get?"#FF7519":"#FAFAFA",height:"100vh"}}>
           <button onClick={ex}>{get?"🔆":"🌙"}</button>
           <h1>Task Management</h1>
           <h2>1.Total Task</h2>
        
           
           {result.map((task) => (
    <p>{task}</p>
))}

<button onClick={()=>setInput(true)}>Add new task</button>
{input && (
    <input type="text" placeholder="Enter your task" />
)}
    </div>
    
       
    
    
    
    </>
)
}

export default Root