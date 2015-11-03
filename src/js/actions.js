export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SORT_BY_TITLE = 'SORT_BY_TITLE';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';

export function addItem(id) {
  return {
    type: ADD_ITEM,
    id: id
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id: id
  };
}

export function sort(type) {
  return { type: type };
}
