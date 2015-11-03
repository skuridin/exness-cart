import React from 'react';

export default function CartTableComponent({ goods, items, handleRemove }) {
  const rows = items.map((item, idx) => {
    const good = goods.get(item.get('id'));
    return (
      <tr key={idx}>
        <td>{good.get('title')}</td>
        <td>{good.get('price')}</td>
        <td>{item.get('amount')}</td>
        <td className="goods__action">
          <button type="button"
                  data-id={item.get('id')}
                  onClick={handleRemove}>Remove</button>
        </td>
      </tr>
    );
  }).toList();
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
