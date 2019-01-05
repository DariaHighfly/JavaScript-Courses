import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReduser';
import orderReducer from './orderReduser';

export default combineReducers({
  productList: productsReducer,
  cartList: cartReducer,
})

/*
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer
})
*/