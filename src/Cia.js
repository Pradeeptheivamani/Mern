import React, { useState ,useEffect} from 'react'
import axios from 'axios'
function Cia() {
    const[light,setLight]=useState(false);
    const[num,setNum]=useState(0)
      const [data, setData] = useState({})
    const Mat=Math.random()
      console.log("Rondom Number :" ,Mat);
      const Cdate=new Date().toLocaleDateString();
      console.log("current Date:",Cdate)
       
    function ex(){
        setLight(!light)
    }
     useEffect(() => {
    axios.get("https://dummyjson.com/c/dee5-570c-4565-bc01")
      .then((i) => {
        setData(i.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

    
  return (
    <>
    <div>Cia</div>
    {light}
     <div style={{backgroundColor:light?"#FF7519":"#0d1859ef",height:"50vh"}}>
           <button onClick={ex}>{light?"🔆":"🌙"}</button><br/>
          <input type='Age' placeholder='Enter you age'></input><br/>
          <button type='submit'> submit</button><br/>
           </div>
          
           <div style={{backgroundColor:"#6c7acdef",height:"50vh",color:"white"}}>
            <h3>{data.name}</h3>
              <h3>{data.role}</h3>
                            </div>
           
    </>
  )
}

export default Cia