
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Accordian from '../Accordian.css'
function Accordian_Task() {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(null)
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
    <h1>MY Portfolio</h1>
      <div className='Bot'>
        <h1 onClick={() => setShow(!show)}>
        Projects
      </h1>
      {show && data.projects?.map((i) => {
        return (
          <div key={i.id}>
            <h3 onClick={() => setSelected(selected === i.id ? null : i.id)}>
              Project {i.id}
            </h3>
            {selected === i.id && (
              <div>
                <h4>{i.title}</h4>
                <p>{i.description}</p>
              </div>
            )}
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Accordian_Task
