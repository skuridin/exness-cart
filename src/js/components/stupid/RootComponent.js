import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Goods from '../smart/GoodsComponent';
import Cart from '../smart/CartComponent';

export default function RootComponent() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="column">
          <h2 className="column__title">Goods</h2>
          <Goods />
        </div>
        <div className="column">
          <h2 className="column__title">Cart</h2>
          <Cart />
        </div>
      </div>
    </Provider>
  );
}
