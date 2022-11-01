import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import Cartitem from "./Cartitem";
const CartItems = () => {
  const Cartitems = useSelector((state) => state.cartSlice.itemList);
  console.log(Cartitems);
  return (
    <div>
      CartItems
      <ul>
        <div className="cartitem_title">
          <p>Id</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p></p>
          <p></p>
        </div>
        {Cartitems.map((item) => (
          <li key={item.id}>
            <Cartitem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}

            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
