import React from 'react';
import goods from '../goods.js';

export default function CartComponent(props) {
  return (
    <div className="cart">
      <table className="cart__table">
        <thead>
          <tr>
            <th><a href="#" onClick={props.sortHandler}>Title</a></th>
            <th><a href="#" onClick={props.sortHandler}>Price</a></th>
            <th><a href="#" onClick={props.sortHandler}>Quantity</a></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.items).map((title, idx) => {
            return (
              <tr key={idx}>
                <td>{title}</td>
                <td>{goods[title]}</td>
                <td>{props.items[title]}</td>
                <td>
                  <a href="#" onClick={props.removeItemHandler}>Remove</a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: </td>
            <td>
              {Object.keys(props.items).reduce((prev, title) => {
                const price = goods[title];
                const quantity = props.items[title];
                return prev + price * quantity;
              }, 0)}
            </td>
            <td></td>
            <td>
              <button type="button" onClick={props.saveHandler}>
                Save
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
