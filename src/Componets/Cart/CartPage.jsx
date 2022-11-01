import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItems from "./CartItems";
const CartPage = () => {
  let total = 0;
  const itemList = useSelector((state) => state.cartSlice.itemList);

  itemList.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <div>
      <CartItems />
      <h3>Total</h3>
      <p>{total}</p>
      <button>Place Order</button>
    </div>
  );
};

export default CartPage;
