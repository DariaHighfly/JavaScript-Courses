import React, { Component } from 'react';
import Photo from "../components/Photo/Photo";
import ProductList from '../components/Cart/ProductList'
import Feedback from "../components/Feedback/Feedback";
import Footer from "../components/Footer/Footer";
import './Main.css';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {addToCart, getProducts} from "../actions";
import Header from "../components/Header/Header";

class Main extends Component {

  handleAddToCartClick = (product) => {
    this.props.addToCart(product);
  };

  render() {
    let imageBaseURL = "/";
    console.log(this.props.products);
    return (
      <div className='Main'>
        <Header/>
        <Photo/>
        <div className="mainGoods">
          <ProductList
            products={this.props.products}
            handleAddToCartClick={this.props.handleAddToCartClick}
            imageBaseURL={imageBaseURL}
          />
        </div>
        <Feedback/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productList.products
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts: getProducts,
    addToCart: addToCart,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
