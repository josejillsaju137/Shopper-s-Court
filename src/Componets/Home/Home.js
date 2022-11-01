import React from "react";
import { useSelector } from "react-redux";
import CartPage from "../Cart/CartPage";
import Header from "../Header/Header";
import ProductList from "../Product/ProductList";
import ProductPage from "../Product/ProductPage";

const Home = () => {
  const showCart=useSelector(state=>state.cartSlice.showCart);
  return (
    <div className="">
      <Header />
      <ProductPage />
    {showCart && <CartPage/>}
    </div>
  );
};

export default Home;
