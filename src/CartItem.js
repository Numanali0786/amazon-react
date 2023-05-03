import React from 'react';
import { useAppContext } from './context/Context';
import './CartItem.css'

const CartItem = ({id,title,price,img}) => {
    const {dispatch} = useAppContext()

    console.log('ghj',id,title,price,img)
    const handleClick=()=>{
        dispatch({type:"REMOVE_FROM_CART",payload:id})
    }
  return (
    <div className='cartItem'>
      <div className="cartItem__info">
        <p>{title}</p>
        <h4>{price}</h4>
      </div>
      <img className='cartItem_img' src={img} alt="cartItem" />
      <button onClick={handleClick}>remove from cart</button>
    </div>
  )
}

export default CartItem