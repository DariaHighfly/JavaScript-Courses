import React, { Component } from 'react';
import '../Goods/Goods.css'


let ProductList = function ({products, handleAddToCartClick, imageBaseURL}) {
  if (products === undefined || products.length === 0) {
    return(
      <p> Товаров нет </p>
    );
  } else {
    var list = products.map(function(product) {
      return (
        <div className="goodsCard">
          <img className="goodsCardPic" src={`${imageBaseURL}${product.picture}`}/>
          <p className="goodsCardTitle"> {product.name} </p>
          <p className="goodsCardDisc">  {product.description} </p>
          <p className="goodsCardPrice"> {product.price} </p>
          <button className="goodsCardButton">Купить</button>
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
};

export default ProductList;
