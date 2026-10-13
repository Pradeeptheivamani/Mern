import React from "react";
function Test(){
    const list={id:1,name:"kumar",mark:100}
               /* {id:2,name:"Rahul",mark:25},
                {id:3,name:"Parthiban",mark:27},
                {id:4,name:"megala",mark:28},
                {id:5,name:"prakash",mark:30},
                {id:6,name:"koshika",mark:40},
                {id:7,name:"shankar",mark:50},
                {id:8,name:"Arul",mark:50},
                {id:9,name:"kanmani",mark:70},
                {id:10,name:"pradeep",mark:80},*/

    
    const {id,name,...remains}=list
    const update={
        ...list,
        mark:200
    }
    console.log(update)
    return(
        <>
        <div>
      {datamark.map((i)=>{
            return (
                <>
                {i.name}
                </>
            )
          })}
        </div>
        </>
    )
}
export default Test