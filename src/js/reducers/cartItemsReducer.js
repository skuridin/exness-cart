import { Map, List, fromJS } from 'immutable';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';

let defaultState = localStorage.getItem('cart');
if (defaultState) {
  defaultState = fromJS(JSON.parse(defaultState));
} else {
  defaultState = List();
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

export default function cartItems(state = defaultState, action) {
  switch (action.type) {
  case ADD_ITEM:
    return addItem(state, action);
  case REMOVE_ITEM:
    return removeItem(state, action);
  default:
    return state;
  }
}
