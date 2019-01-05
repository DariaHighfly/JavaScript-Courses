import React, { Component } from 'react';
import store from '../reducers/store';

export default class CartButton extends Component {

  addToCart() {
    store.dispatch({type: 'INCREMENT_COUNT'});
    console.log(store.getState());
  }

  render() {
    return (
      <div>
        <button onClick={this.addToCart} className="goodsCardButton">Купить</button>
      </div>
    );
  }
}