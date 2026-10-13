import {React,useState}from "react";
import'./Accordian.css';


const Accordian=()=>{
    const[open,setOpen]=useState(null);
    //function expand(){
      //  setOpen(!open)
    //}
    const accor=[
        {
           id:1, title:"accordian 1"
            ,para:"paragraph 1"
        },{
            id:2,
            title:"accordian 2",
            para:"paragraph 2"
        }
    ]
    function handled(id){
        console.log(id)
        setOpen(id)
       setOpen(open ==id?null :"")
    }
        return(
     <>
     {
        accor.map((res)=>{
            return(
            <>
            <p className="head" onClick={()=> handled(res.id)}>{res.title}</p>
            {open}
            {res.id}
            {open ?<p>{res.para}</p>:""}
            </>
            )
        })
     }

     </>
    )

}
export default Accordian








