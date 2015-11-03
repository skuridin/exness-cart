import { Map } from 'immutable';

const defaultState = Map({
  1: Map({ id: 1, title: 'iPhone', price: 700 }),
  2: Map({ id: 2, title: 'iPad', price: 500 }),
  3: Map({ id: 3, title: 'iMac', price: 1500 }),
  4: Map({ id: 4, title: 'Macbook', price: 1200 }),
  5: Map({ id: 5, title: 'MacPro', price: 2000 })
});

export default function goods(state = defaultState) {
  return state;
}
