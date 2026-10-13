import React from "react";
const ObjectExample=()=>{
    const Student=[{
        id:1,
        name:"Pradeep",
        age:20,
        department:"cse",
        mark:97


    },
          {id:2,
        name:"kuamr",
        age:20,
        department:"cse",
        mark:97}
]
//pop,push,shift,unshift methods
/*const numbers=[1,2,3,4,5,6]
console.log("pop",numbers.pop(),numbers)
console.log("push",numbers.push(8),numbers)
console.log("shift",numbers.shift(),numbers)
console.log("unshift",numbers.unshift(1000),numbers)*/
//slice method
/*const names=["pradeep","rahul","parthi","meg"];
const result=names.slice(1,2);
console.log(result);*/
//splice method
const members=["naveen","kumar","rajesh","rajesh"]
const spliceresult=members.splice(1,2,"added")
console.log(">>>>>>", spliceresult)
console.log(members)


//const filter=Student.filter(function(mark){
//return mark>90
//console.log("pass");
//})
//console.log(filter);
  // const data=Student.map((i)=>{
    //    return(<>
      //  {i.name}
    //</>
    //)})
    //console.log(data)
    const number=[1,2,3,4,5,6,7,8,9,10];
    const filtered=number.filter(
        function(x){
            return x>5
        }
    )
     console.log(filtered)
    //filtered in normal function
   /* const datamark=Student.filter(
        function(i){
            return i.mark>90
        }
    )
    console.log(datamark)*/
    //filtered in Arrorfunction
    const datamark=Student.filter((i)=>i.mark>90)
    console.log(datamark);

    return(
        <>
          <table>
           
             <th>id</th>
            <th>Name</th>
             <th>Age</th>
              <th>Department</th>
               <th>mark</th>
           
           
            <tr>
            <td>01</td>
            <td>pradeep</td>
            <td>20</td>
            <td>Cse</td>
            <td>90</td>
            </tr>
             <tr>
            <td>02</td>
            <td>kumar</td>
            <td>20</td>
            <td>Cse</td>
            <td>86</td>
            </tr>
             <tr>
            <td>03</td>
            <td>Rahul</td>
            <td>20</td>
            <td>Cse</td>
            <td>79</td>
            </tr>
           
          </table>
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
export default ObjectExample;