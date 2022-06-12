import React, { useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../store/Auth/auth";

const Login = () => {
  const nav=useNavigate();
  const {isAuth}= useSelector((state)=>state.auth);
  useEffect(()=>
  {
 if(isAuth)
 {
  nav('/')
 }
 else{
  nav('/login')
 }
  },[isAuth])
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
const dispatch=useDispatch();
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginApi(loginCreds))

  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
