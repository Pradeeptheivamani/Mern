
import {React,useState} from 'react'
import './ModalBox.css'

function ModalBox() {
    const[modal,setModal]=useState(false)
  return (
    <>
    <div>ModalBox</div>
{modal ?  <div className='om'><span>Are you sure t0 continue</span>
<button onClick={()=>setModal(false)}>ok</button>
</div>:""}
       <button onClick={()=>setModal(true)}>confirm</button>
    </>
  )
}

export default ModalBox