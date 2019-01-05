import { createStore } from 'redux';
import reducers from './index'

export default createStore(reducers);

/* const inCartState = {
  auth: { inCart: false }
};

/const storeReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
      if (state - 1 === 0) {
        return state - 1;
      } else {
        return { ...state - 1, auth: { inCart: true }};
      }
    case 'RESET_COUNT':
      return 0;
    default:
      return state;
  }
}

const store = createStore(storeReducer);

export default store;
*/