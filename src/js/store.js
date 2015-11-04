import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const saver = store => next => action => {
  const result = next(action);
  localStorage.setItem('cart', JSON.stringify(store.getState().cartItems));
  localStorage.setItem('sort', JSON.stringify(store.getState().sort));
  return result;
};

const createStoreWithMiddleware = applyMiddleware(saver)(createStore);
export default createStoreWithMiddleware(reducers);
