import React, { Component } from 'react';
import './Goods.css';
import productsData from '../../json';
import CartButton from '../CartButton'

export default class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    }
  }

  render() {
    let imageBaseURL = "/";
    var list = this.state.products.map(function(product) {
      return (
        <div className="goodsCard">
          <img className="goodsCardPic" src={`${imageBaseURL}${product.picture}`}/>
          <p className="goodsCardTitle"> {product.name} </p>
          <p className="goodsCardDisc">  {product.description} </p>
          <p className="goodsCardPrice"> {product.price} </p>
          <button onClick={this.addToCart} className="goodsCardButton">Купить</button>
        </div>
      )
    });
    return (
      <div className="goods">
        <div className="goodsCollage">
          {list}
        </div>
      </div>
    );
  }
}


/*
* <div className="goodsCard">
                  <img className="goodsCardPic" src={sticker1}/>
                  <p className="goodsCardTitle"> Наклейка 1 </p>
                  <p className="goodsCardDisc"> Стикер </p>
                  <p className="goodsCardPrice"> 50 ₽</p>
                  <button className="goodsCardButton"> Купить</button>
                </div>
                <div className="goodsCard">
                  <img className="goodsCardPic" src={sticker2}/>
                  <p className="goodsCardTitle"> Наклейка 2 </p>
                  <p className="goodsCardDisc"> Стикер </p>
                  <p className="goodsCardPrice"> 50 ₽</p>
                  <button className="goodsCardButton"> Купить</button>
                </div>
                <div className="goodsCard">
                  <img className="goodsCardPic" src={sticker3}/>
                  <p className="goodsCardTitle"> Наклейка 3 </p>
                  <p className="goodsCardDisc"> Стикер </p>
                  <p className="goodsCardPrice"> 50 ₽</p>
                  <button className="goodsCardButton"> Купить</button>
                </div>
* */