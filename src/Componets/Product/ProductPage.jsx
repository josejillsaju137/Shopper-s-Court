import React from 'react'
import ProductList from './ProductList';
import "./Productlst.css";
const DUMMY_PRODUCTS = [
    {
      id: 1,
      name: "Beetroot",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/beetroot.jpg",
      price: 60,
    },
    {
      id: 2,
      name: "Bitter Gourd",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/Bitter-Gourd.jpg",
      price: 50,
    },
    {
      id: 3,
      name: "Bottle Gourd",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/Bottle-Gourd-Vegetable.jpg",
      price: 45,
    },
    {
      id: 4,
      name: "Cabbage",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/green-cabbage.jpg",
      price: 30,
    },
    {
      id: 5,
      name: "Capsicum / Bell Pepper",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/capsicum.jpg",
      price: 60,
    },
    {
      id: 6,
      name: "Cabbage",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/green-cabbage.jpg",
      price: 70,
    },
    {
      id: 7,
      name: "Capsicum / Bell Pepper",
      imgURL:
        "https://www.hindimeaning.com/wp-content/uploads/2012/12/capsicum.jpg",
      price: 80,
    },
  ];
const ProductPage = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li className='lis' key={index}>
            <ProductList
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage