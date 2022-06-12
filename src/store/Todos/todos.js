import axios from 'axios';
import { useEffect } from 'react';
import {v4 as uuid} from 'uuid'
import { add_t,del_t,get_t } from './todos.type';

export const addTodosApi=(data)=>(dispatch)=>
{
    axios.post('http://localhost:8080/todos',
    {
         id:uuid(),
         todo:data.current.value,
         completed:false
    })
    .then((r)=>{dispatch({type:add_t,payload:r.data})})
}
export const getTodosApi=()=>(dispatch)=>
{
    useEffect(()=>
    {
     axios.get('http://localhost:8080/todos')
    .then((r)=>{dispatch({type:get_t,payload:r.data})})
    },[dispatch])
   
}
export const deleteTodo=(id)=>(dispatch)=>
{
     axios.delete(`http://localhost:8080/todos/${id}`)
}
