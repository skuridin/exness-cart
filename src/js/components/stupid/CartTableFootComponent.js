import React from 'react';

export default function CartTableHeadComponent({ goods, items }) {
  const total = items.reduce((state, item) => {
    return state + item.get('amount') * goods.get(item.get('id')).get('price');
  }, 0);

  return (
    <tfoot>
      <tr>
        <td>Total:</td>
        <td>${total}</td>
        <td></td>
        <td></td>
      </tr>
    </tfoot>
  );
}
