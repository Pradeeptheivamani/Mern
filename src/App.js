import logo from './logo.svg';
import './App.css';
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
import {Routes, Route, BrowserRouter} from 'react-router';
import Home_Task from './Exam/Home_Task';
import Skills_Task from './Exam/Skills_Task';
import About_Task from './Exam/About_Task';
import Accordian_Task from './Exam/Accordian_Task';
import Projects_Task from './Exam/Projects_Task';
import Login_Task from './Exam/Login_Task';
import Contact_Task from './Exam/Contact_Task';
import Layout_Task from './Exam/Layout_Task';
//import Counter from './Counter';
//import GetData from './GetData'
import Cia from './Cia'
function App() {

  const productObj = [{
    name: "Adidas",
    price: "3000",
    strikePrice: "5000",
    img:"https://www.campusshoes.com/cdn/shop/files/WAVIER_22G-13525_LBEIGE-TAN_02_900x.jpg?v=1784263017"
  },
  {
    name: "Puma",
    price: "2500",
    strikePrice: "3500",
    img:'https://th.bing.com/th/id/OIP.mfk3oRgyoiB4UjeJn8pdUQHaFb?w=284&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'

  },
  {
    name: "Nike",
    price: "4000",
    strikePrice: "6000",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBquhs0b4dHIUFE8vD6Yu9Z-HsFfSTFNrNdGRIDt0TqA&s=10"
  },
   {
    name: "Cotton SOCKS",
    price: "3000",
    strikePrice: "5000",
    img:"https://www.campusshoes.com/cdn/shop/files/DENARO_22G-13460_LBEIGE-BTGRN_01_460x.webp?v=1780903443"
  },
  {
    name: "LINEN",
    price: "2500",
    strikePrice: "3500",
    img:'https://www.campusshoes.com/cdn/shop/files/WAIVER_22G-13525_PINECN-LBEIGE_01_460x.webp?v=1784262557'
  },
  {
    name: "VELVET",
    price: "4000",
    strikePrice: "6000",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPN87aJtuC1co6WdAKDUGC_cxK1fvVms63Vk-60MT3DDGUAwSh-Fv2Yl0&s=10'

  }]
  const watchObj=[
    {name:"Rolex",
      price:600000,
      StrikePrice:500000,
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/r/d/o/-watermarked-original-imahz8vgfcdphz3c.jpeg?q=70"
    },
    {
      name:"sonato",
      price:"5376986",
      strikePrice:"7000000",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/q/c/s/-watermarked-original-imahfszvwjuhtynh.jpeg?q=70"
    },
    {
      name:"fastTrack",
      price:"8000000",
      strikePrice:"900000000",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/h/d/1/1-77188kp01-sonata-men-watermarked-original-imahgemv8jjagzft.jpeg?q=70"
    },
    {name:"samartwatch",
    price:"90000000",
    strikeprice:"89600000",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/h/y/a/-watermarked-original-imahfspyy2hx2hhd.jpeg?q=70"
  },
  {name:"Titan",
    price:"790000",
    strikeprice:"9800",
    img:'https://tse1.mm.bing.net/th/id/OIP.VP9cJJz3sC7FSJUoNZmrzgHaFz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name:"fasttrack",
    price:"4560000",
    strikeprice:"5640000",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/w/s/w/1-avm044-lucifer-men-resized-original-imahzez8ychd5zep.jpeg?q=70"

  }
  ]

  return (
    <div className="App">
     <>
         
<Cia/>    
    {/*testing for github and vscode connections*/}
  
   </>
    </div>

  );
}
    

export default App;
