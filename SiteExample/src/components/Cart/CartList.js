import React from 'react';
import './CartList.css'

let CartList = function ({cartList}) {
  if (cartList === undefined || cartList.length === 0) {
    return (
      <p className="Nope"> Корзина пуста </p>
    );
  } else {
    return(
    cartList.map((cart) => (
      <label>{cart.id}{cart.name}{cart.price} </label>
    )));
  }
};

export default CartList;