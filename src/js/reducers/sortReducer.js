import { Map, fromJS } from 'immutable';
import { SORT_BY_TITLE, SORT_BY_PRICE, SORT_BY_AMOUNT } from '../actions';

/**
 * Default state from local storage
 * @param  {String} 'sort'  Data from local storage
 * @return {Immutable.Map}
 */
let defaultState = localStorage.getItem('sort');
if (defaultState) {
  defaultState = fromJS(JSON.parse(defaultState));
} else {
  defaultState = Map();
}

/**
 * Sort reducer
 * @param  {Immutable.Map} state  Default state
 * @param  {Object} action        Action
 * @return {Immutable.Map}        New state
 */
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
