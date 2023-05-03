import React from "react";
import cartAids from "./banner_image.jpg";
import cartAids2 from "./banner_image_2.jpg";

import "./Cart.css";
import { useAppContext } from "./context/Context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useAppContext();
  return (
    <div className="cart">
      <div className="cart__box">
        <div className="cart__left">
          <img src={cartAids} alt="cardAids" />
          {cart.length ? (
            <div className="cart__products">
              <h4>Your Shopping Basket</h4>
              {/* <p className='cart__product'>1</p>
                <p className='cart__product'>2</p>
                <p className='cart__product'>3</p> */}

              {cart.map((cartItem) => {
                return <CartItem {...cartItem} />;
              })}
            </div>
          ) : (
            <h4>Your Shopping Basket is Empty</h4>
          )}
        </div>
        <div className="cart__right">
          <span>
            Subtotal ({14} items): <bold>{0}</bold>
          </span>
          <div className="cart__gift">
            <input type="checkbox" />
            <span>The order contains a gift.</span>
          </div>

          <button className="cart__rightBtn">Proceed to checkout</button>
          <img className="banner__2" src={cartAids2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
