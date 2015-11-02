import { combineReducers } from 'redux';

const defaultState = {
  1: { id: 1, title: 'iPhone', price: 700 },
  2: { id: 2, title: 'iPad', price: 500 },
  3: { id: 3, title: 'iMac', price: 1500 },
  4: { id: 4, title: 'Macbook', price: 1200 },
  5: { id: 5, title: 'MacPro', price: 2000 }
};

function goods(state = defaultState, action) {
  switch (action.type) {
  default:
    return state;
  }
}

function cartItems(state = [], action) {
  switch (action.type) {
  case 'ADD_ITEM':
  case 'REMOVE_ITEM':
  default:
    return state;
  }
}

export default combineReducers(goods, cartItems);
