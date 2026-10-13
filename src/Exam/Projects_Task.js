
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects_Task.css'
function Projects_Task() {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/c/dee5-570c-4565-bc01")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
<h1>MY Portfolio</h1>
     <div className='NI'> <h2>Projects</h2></div> <br/>

     <div className='Tom'> {data.projects?.map((project) => (
        <div key={project.id} className='Dog'>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default Projects_Task;
