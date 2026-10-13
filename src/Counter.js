import {React,useState,useEffect}from 'react'

function Counter() {
    const[count,setCount]=useState(0);
   

//     useEffect(()=>
//     {
//     document.title="Counter"
//     },[]
// )
// useEffect(()=>
//     {
//         document.title=count;}
// )
// useEffect(()=>
//     {
//         setCount(50)}
// )
function timeOut(){
    setTimeout(
        ()=>{
  console.log("test")
        },2000
    )
}
function interval(){
    setInterval(
        ()=>{
    console.log("Intervel Test")
        },300
    )
}
  return (
    <>
    <div>
        <h1>count:{count}</h1></div>
    <button onClick={()=>setCount(count+1)}>INCREMENT</button><br/>
     <button onClick={()=>setCount(count-1)}>DECREMENT</button><br/>
      <button onClick={()=>setCount(0)}>Reset</button><br/>
      <button onClick={timeOut}>timeOut</button><br/>
        <button onClick={interval}>interval</button><br/>
    </>
  )
}

export default Counter