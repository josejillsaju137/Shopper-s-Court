import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "../../Store/AuthSilce";
import "./Auth.css";
const Login = () => {
  const isLogedIn = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const loginFunction = (e) => {
    console.log("login",isLogedIn);
    e.preventDefault();
    dispatch(isLoggedIn(true));

  };
  return (
    <div className="login">
      <div className="login_section">
        <h2>Login</h2>
        <form onSubmit={loginFunction} className="form">
          <h4 htmlFor="">UserName</h4>
          <input type="text" className='login_textbox' />
          <h4 htmlFor="">Password</h4>
          <input type="password" className='login_password' />
          <button className="login_button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
