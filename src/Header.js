import React from 'react'
import{useState} from 'react'
  function Header(){
    const[status,setStatus]=useState("");
    const Ctime=new Date().toLocaleTimeString();
   // console.log(Ctime);
   //  const Ctime =new Date().toLocaleDateString();
     console.log(Ctime);
   if(Ctime>="10:05:00" && status!="green"){
    console.log("system is offline");
    setStatus("green");
   }
    return( 
      <>
        <h1>Header React MERN STACK</h1>
        <div style={{width:"100%" ,height:"100vh", backgroundColor:status}}>
            {status}
            <button diasabled={status=="green" ? true:false}>test</button>
        </div>
        </>
    )  }
    export default Header