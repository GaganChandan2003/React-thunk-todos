import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import { logoutApi } from "../store/Auth/auth";




const Navbar = () => {
  const nav=useNavigate();
  const dispatch=useDispatch();
  return (
    <div style={{padding: "10px",display: "flex",gap: "20px",justifyContent: "space-between",}} >
      <div style={{display: "flex",gap: "20px",}}>
        <Link to="/">Logo</Link>
      </div>
      <div style={{display: "flex",gap: "20px",}}>
        <button onClick={()=>dispatch(logoutApi())} >Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
