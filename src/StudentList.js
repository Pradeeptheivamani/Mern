import React from 'react'
import StudentCard from './StudentCard'
function StudentList({student}) {
  return (
    <div>
        <center>
        <h1 style={{backgroundColor:"lightblue"}}>Student Information list</h1>
        </center>
      <StudentCard student={student}/>
    </div>
  )
}

export default StudentList