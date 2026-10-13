import { useState } from "react";
import './ArrowFunction.css';
const ArrowFunction =()=>{
    const[value,setValue]=useState(0);
    function Increment(){
        setValue(value+1);
        
    }
   // function Decrement(){
     //   setValue(value-2)
   // }
        return(
            <>
            <h1>Arrowfunction</h1>
            {value}<br/>
          <div > <button onClick={Increment}id="tax">Increment</button></div> 
         <div>  <button onClick={()=>setValue(value-1)}>Decrement</button></div>

            </>
        )

 
}
export default ArrowFunction;