import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cartSlice";
import "./Cart.css";

const Cartitem = ({ id, price, total, name, quantity }) => {
  const dispatch = useDispatch();
  const incermentCartItem = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      }) 
    ); 
  };
  const decermentCartItem = () => {
  
      console.log("----");
     dispatch(cartAction.removeFromCart(id))
  };
  const RemoveCartItem = () => {};
  return (
    <div className="cartitem">
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{total}</p>
      <button onClick={incermentCartItem}>+</button>
      <button onClick={decermentCartItem }>-</button>
    </div>
  );
};

export default Cartitem;
