import { login_e,login_l,login_s,logout } from "./auth.types";
import axios from 'axios'


export const LoginApi=(data)=>(dispatch)=>
{
  dispatch({type:login_l});

  axios.post('https://reqres.in/api/login',
  {
    email:data.email,
    password:data.password
  })
  .then((r)=>dispatch({type:login_s,payload:r.data}))
  .catch(()=>dispatch({type:login_e}))
}

export const logoutApi=()=>(dispatch)=>{dispatch({type:logout})}