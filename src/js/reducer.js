import { combineReducers } from 'redux';
import { Map, List, fromJS } from 'immutable';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SORT_BY_TITLE,
  SORT_BY_PRICE,
  SORT_BY_AMOUNT
} from './actions';

const defaultGoods = Map({
  1: Map({ id: 1, title: 'iPhone', price: 700 }),
  2: Map({ id: 2, title: 'iPad', price: 500 }),
  3: Map({ id: 3, title: 'iMac', price: 1500 }),
  4: Map({ id: 4, title: 'Macbook', price: 1200 }),
  5: Map({ id: 5, title: 'MacPro', price: 2000 })
});

let defaultCartItrms = localStorage.getItem('data');
if (defaultCartItrms) {
  defaultCartItrms = fromJS(JSON.parse(defaultCartItrms));
} else {
  defaultCartItrms = List();
}

function addItem(state, action) {
  let added = false;
  const newState = state.map(item => {
    if (item.get('id') === action.id) {
      item.amount++;
      added = true;
      return item.set('amount', item.get('amount') + 1);
    }
    return item;
  });
  if (!added) return newState.push(Map({ id: action.id, amount: 1 }));
  return newState;
}

function removeItem(state, action) {
  return state.map(item => {
    if (item.get('id') === action.id) {
      return item.set('amount', item.get('amount') - 1);
    }
    return item;
  }).filter(item => {
    return item.get('amount') > 0;
  });
}

function stableSort(state, key, reverse = false) {
  return state.map((item, idx) => {
    item.position = idx;
    return item;
  }).sort((ela, elb) => {
    if (ela[key] === elb[key]) {
      return ela.position - elb.position;
    } else if (ela[key] < elb[key]) {
      return reverse ? 1 : -1;
    }
    return reverse ? -1 : 1;
  });
}

function goods(state = defaultGoods, action) {
  switch (action.type) {
  default:
    return state;
  }
}

function cartItems(state = defaultCartItrms, action) {
  switch (action.type) {
  case ADD_ITEM:
    return addItem(state, action);
  case REMOVE_ITEM:
    return removeItem(state, action);
  case SORT_BY_TITLE:
    return stableSort(state, 'title');
  case SORT_BY_PRICE:
    return stableSort(state, 'price');
  case SORT_BY_AMOUNT:
    return stableSort(state, 'amount');
  default:
    return state;
  }
}

export default combineReducers({ goods, cartItems });
