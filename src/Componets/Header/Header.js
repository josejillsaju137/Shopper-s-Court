import React from "react";
import { useDispatch } from "react-redux";
import { isLoggedOut } from "../../Store/AuthSilce";
import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(isLoggedOut(true));
  };
  return (
    <div className="header">
      <h1>Shopper's Court</h1>
      <button className="buttond">Home</button>
      <button onClick={logoutHandler}>Logout</button>
      <Cart />
    </div>
  );
};

export default Header;
