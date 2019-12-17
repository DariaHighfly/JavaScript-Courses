import productData from '../json';

export function productsReducer(state = {products: productData}, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        products: [...state.products]
      };
    default:
  }
  return state;
}


/*
const initialState = {
  items: []
};

export default function productsReducer(state = initialState, action) {
  switch(action.type){
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        items:action.payload
      };
    default:
      return state
  }
}
*/