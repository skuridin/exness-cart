import { fromJS, List, Map } from 'immutable';
import store from '../store';
import { ADD_ITEM, REMOVE_ITEM, SORTED } from '../actions';

let defaultState;
try {
  defaultState = fromJS(JSON.parse(localStorage.getItem('cart')));
} catch (err) {
  defaultState = List();
}

function addItem(state, action) {
  const newState = state.map(item => {
    if (item.get('id') === action.id) {
      return item.set('amount', item.get('amount') + 1);
    }
    return item;
  });
  if (state.equals(newState)) {
    return newState.push(Map({ id: action.id, amount: 1 }));
  }
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

function sortByTitle(state, reverse) {
  const goods = store.getState().goods;
  return state
    .map((item, idx) => item.set('position', idx))
    .sort((ela, elb) => {
      const title1 = goods.get(ela.get('id')).get('title').toLowerCase();
      const title2 = goods.get(elb.get('id')).get('title').toLowerCase();
      if (title1 === title2) {
        return ela.get('position') - elb.get('position');
      } else if (title1 < title2) {
        return reverse ? 1 : -1;
      }
      return reverse ? -1 : 1;
    });
}

function sortByPrice(state, reverse) {
  const goods = store.getState().goods;
  return state.map((item, idx) => {
    return item.set('position', idx);
  }).sort((ela, elb) => {
    const price1 = goods.get(ela.get('id')).get('price');
    const price2 = goods.get(elb.get('id')).get('price');
    if (price1 === price2) {
      return ela.get('position') - elb.get('position');
    } else if (price1 < price2) {
      return reverse ? 1 : -1;
    }
    return reverse ? -1 : 1;
  });
}

function sortByAmount(state, reverse) {
  return state.map((item, idx) => {
    return item.set('position', idx);
  }).sort((ela, elb) => {
    const amount1 = ela.get('amount');
    const amount2 = elb.get('amount');
    if (amount1 === amount2) {
      return ela.get('position') - elb.get('position');
    } else if (amount1 < amount2) {
      return reverse ? 1 : -1;
    }
    return reverse ? -1 : 1;
  });
}

export default function cartItems(state = defaultState, action) {
  switch (action.type) {
  case ADD_ITEM:
    return addItem(state, action);
  case REMOVE_ITEM:
    return removeItem(state, action);
  case SORTED:
    const { by, reverse } = store.getState().sort.toJS();
    if (by === 'price') {
      return sortByPrice(state, reverse);
    } else if (by === 'amount') {
      return sortByAmount(state, reverse);
    }
    return sortByTitle(state, reverse);
  default:
    return state;
  }
}
