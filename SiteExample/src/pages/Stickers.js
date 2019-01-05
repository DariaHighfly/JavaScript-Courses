import React, { Component } from 'react';
import Photo from "../components/Photo/Photo";
import Footer from "../components/Footer/Footer";
import './Stickers.css';
import Feedback from "../components/Feedback/Feedback";
import ProductList from "../components/Cart/ProductList";
import {bindActionCreators} from "redux";
import {addToCart} from "../actions";
import {getProducts} from "../actions";
import connect from "react-redux/es/connect/connect";
import Header from "../components/Header/Header";

class Stickers extends Component {

  /*componentDidMount() {
    this.props.getProducts();
  }*/

  handleAddToCartClick = (product) => {
    this.props.addToCart(product);
    console.log(this.props.products);
  };

  render() {
    let imageBaseURL = "/";
    return (
      <div className="Stickers">
        <Header/>
        <Photo/>
        <div className="stickersGoods">
          <div className="goods">
            <div className="goodsCollage">
              <ProductList
                products={this.props.products}
                handleAddToCartClick={this.handleAddToCartClick}
                imageBaseURL={imageBaseURL}
              />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stickers);
