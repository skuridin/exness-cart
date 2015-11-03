import { Map } from 'immutable';
import { SORT_BY_TITLE, SORT_BY_PRICE, SORT_BY_AMOUNT } from '../actions';

const defaultState = Map({
  by: null,
  reverse: false
});

export default function sort(state = defaultState, action) {
  let reverse;
  switch (action.type) {
  case SORT_BY_TITLE:
    reverse = state.get('reverse');
    if (state.get('by') === 'title') reverse = !reverse;
    return state.set('by', 'title').set('reverse', reverse);
  case SORT_BY_PRICE:
    reverse = state.get('reverse');
    if (state.get('by') === 'price') reverse = !reverse;
    return state.set('by', 'price').set('reverse', reverse);
  case SORT_BY_AMOUNT:
    reverse = state.get('reverse');
    if (state.get('by') === 'amount') reverse = !reverse;
    return state.set('by', 'amount').set('reverse', reverse);
  default:
    return state;
  }
}
