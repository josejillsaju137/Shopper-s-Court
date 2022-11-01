import React from "react";
import "./Header.css";
import Carts from "../../Images/Cart.png";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/cartSlice";
const Cart = () => {
  const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);
  const dispatch = useDispatch();
  const ShowCart = () => {
    dispatch(cartAction.setShowCart());
  };
  return (
    <div className="cart">
      <p onClick={ShowCart}>{totalQuantity}</p>
      <img src={Carts} alt="Cart" width="50" height="50" />
    </div>
  );
};

export default Cart;
