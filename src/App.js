import logo from './logo.svg';
import './App.css';
//import axios from 'axios'
//import Header from './Header.js'
//import ArrowFunction from './Arrowfuction.js';
//import './ArrowFunction.css'
//import Project from './Project.js';
//import './ObjectExample.js'
//import ObjectExample from './ObjectExample.js';
//import Task from './Task.js'
//import './Project.css'
//import Accordian from './Accordian.js'
//import ModalBox from './ModalBox'
//import Test from'./Test'
//import Project from './Project.js'
//import Om from './Om.js'
//import Root from'./Root'
//import Top from'./Top.js'
//import Bot from'./Bot.js'
//import Tom from './Tom'
//import Errorhandling from './Errorhandling'
//import Product from './Product'
//import Home from './Home'
//import Watch from './Watch'
//import Login from './Login'
// import {Routes, Route, BrowserRouter} from 'react-router';
// import Home_Task from './Exam/Home_Task';
// import Skills_Task from './Exam/Skills_Task';
// import About_Task from './Exam/About_Task';
// import Accordian_Task from './Exam/Accordian_Task';
// import Projects_Task from './Exam/Projects_Task';
// import Login_Task from './Exam/Login_Task';
// import Contact_Task from './Exam/Contact_Task';
// import Layout_Task from './Exam/Layout_Task';
// //import Counter from './Counter';
// import GetData from './GetData'
// import Nex from './Nex'
// import Cia from './Cia'
// import { useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';
// import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
// import Paper from '@mui/material/Paper';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import LockIcon from '@mui/icons-material/Lock';
// // import { Lock } from 'lucide-react';
// // import Parent from "./Parent";
// import Student from "./Student";
// import Child from "./Child";
// import EmployeePage from './EmployeePage'
// import EmployeeCard from './EmployeeCard'
// import EmployeeSkills from './EmployeeSkills'
import StudentList from './StudentList'
import StudentCard from './StudentCard'
import axios from 'axios'
import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            setData(res.data);
        })
}, []);


  

  return (
    <div>
        <StudentList student={data}/>
      
    </div>
  );
}



export default App;


