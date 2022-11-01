import { createAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cartSlice";

import "./Productlst.css";
const ProductList = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
 
      <div className="card">
        <img className='image'  src={imgURL} alt={name} />
        <h2>{name}</h2>
        <p>₹ {price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
  
  );
};

export default ProductList;
