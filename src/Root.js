import React, { useState } from 'react'

function Root() {
                 const[open,setOpen]=useState("")
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
    function handle(id){
        // setOpen(open ==id?null :"")
        setOpen(!open)
    }

  return (
    <>
     {
        accor.map((res)=>{
            return(
            <>
            
            {open}

            </>
            )
        })
     }

     </>
    

        
  )
}

export default Root