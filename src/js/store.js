import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const saver = store => next => action => {
  const result = next(action);
  localStorage.setItem('data', JSON.stringify(store.getState().cartItems));
  return result;
};

const createStoreWithMiddleware = applyMiddleware(saver)(createStore);
export default createStoreWithMiddleware(reducer);
