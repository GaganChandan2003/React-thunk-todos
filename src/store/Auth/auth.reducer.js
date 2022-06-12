import { login_e, login_l, login_s, logout } from "./auth.types";

let token=localStorage.getItem("token");

const initialState={loading:false,error:false,isAuth:false,token:token}

export const authReducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
            case login_l:{return {...state,loading:true,error:false}}
            case login_s:{localStorage.setItem("token", payload.token);return {...state,loading:false,error:false,isAuth:true,token:payload.token};}
            case login_e:{return {...state,loading:false,error:true,isAuth:false};}
            case logout:{return {...state,isAuth:false};}
            default:{return {...state};} 
    }
}