export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
export const SORTED = 'SORTED';
import store from './store';

export function addItem(id) {
  return { type: ADD_ITEM, id };
}

export function removeItem(id) {
  return { type: REMOVE_ITEM, id };
}

export function sortBy(type) {
  return { type };
}

export function sort(type) {
  if (type === 'price') {
    store.dispatch(sortBy(SORT_BY_PRICE));
    return { type: SORTED };
  } else if (type === 'amount') {
    store.dispatch(sortBy(SORT_BY_AMOUNT));
    return { type: SORTED };
  }
  store.dispatch(sortBy(SORT_BY_TITLE));
  return { type: SORTED };
}
