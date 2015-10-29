import React from 'react';
import Cart from './CartComponent';
import Goods from './GoodsComponent';

export default function CartComponent(props) {
  return (
    <div className="container">
      <div className="container__side">
        <div className="side">
          <h1 className="side__title">Goods</h1>
          <Goods addItemHandler={props.addItemHandler} />
        </div>
      </div>
      <div className="container__side">
        <div className="container__alert">{props.message}</div>
        <div className="side">
          <h1 className="side__title">Cart</h1>
          <Cart items={props.cart}
            sortHandler={props.sortHandler}
            saveHandler={props.saveHandler}
            removeItemHandler={props.removeItemHandler} />
        </div>
      </div>
    </div>
  );
}
