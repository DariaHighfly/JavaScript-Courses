import React, { Component } from 'react';
import './ShoppingCart.css';
import Footer from "../components/Footer/Footer";
import { connect } from 'react-redux';
import CartList from "../components/Cart/CartList";
import Header from "../components/Header/Header";

class ShoppingCart extends Component {
  render() {
    return (
      <div className='ShoppingCart'>
        <Header/>
        <CartList
          cartList={this.props.cart}
        />
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartList.cart,
  }
}

export default connect(mapStateToProps, null)(ShoppingCart);