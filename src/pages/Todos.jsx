import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Todos = () => {
  const {id} =useParams();
  const [data, setdata] = useState({});
  
  useEffect(()=>
  {
     axios.get(`http://localhost:8080/todos/${id}`)
     .then((res)=>setdata(res.data));
  },[])
  console.log(data);
  return (
    <div>
      {
        <>
        <h4>id: {data.id}</h4>
        <h1> Todos: {data.todo}</h1>
        </>
        
      }
    </div>
  )
}

export default Todos