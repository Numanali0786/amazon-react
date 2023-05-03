import React, { useState } from "react";
import "./Product.css";
import { useAppContext } from "./context/Context";

const Product = ({ title, price, img }) => {
  // const [bagCount,setBagCount] = useState(0)
  const { dispatch } = useAppContext();
  // console.log(dispatch,cart,bagCount)

  // generate id

  const handleClick = () => {
    const id = new Date().getTime().toString();
    dispatch({ type: "ADD_TO_CART", payload: { id, title, price, img } });
  };

  // console.log(img);
  return (
    <div className="products">
      <div className="product__info">
        <p>{title}</p>
        <h4>{price}</h4>
      </div>
      <img className="product_img" src={img} alt="product" />
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
};

export default Product;
