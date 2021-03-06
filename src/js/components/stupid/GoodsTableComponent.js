import React from 'react';

export default function GoodsTableComponent({ goods, handleAdd }) {
  const rows = goods.map((item, idx) => {
    return (
      <tr key={idx}>
        <td>{item.get('title')}</td>
        <td>${item.get('price')}</td>
        <td className="table__action">
          <button type="button"
                  className="table__button table__button--add"
                  data-id={item.get('id')}
                  onClick={handleAdd}>Buy</button>
        </td>
      </tr>
    );
  }).toList();
  return (
    <table>
      <thead><tr><th>Title</th><th>Price</th><th></th></tr></thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
