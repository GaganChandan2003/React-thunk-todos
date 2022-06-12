import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTodosApi, deleteTodo, getTodosApi } from '../store/Todos/todos';

const Home = () => {
const {data}=useSelector((state)=>state.todos)
  const ref=useRef();
  const dispatch=useDispatch();
  const handleonclick=()=>
  {
    dispatch(addTodosApi(ref));
    
  }
 const handledelete=(id)=>
 {
    dispatch(deleteTodo(id));
 }
  dispatch(getTodosApi());
  return (
   <>
   Add Todos
   <div>
   
      <input type="text" ref={ref}/>
      <button onClick={handleonclick}>add</button>
    </div>
    {
      data.map((el)=>
      (
         <div key={el.id}><h2>{el.todo}</h2>
         <input type="checkBox" />
         <button onClick={()=>handledelete(el.id)}>Delete</button>
         <Link to={`/${el.id}`}>Details</Link>
      </div>
      ))
    }
   </>
    
  )

}

export default Home