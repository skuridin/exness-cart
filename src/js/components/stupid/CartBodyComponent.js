import React from 'react';

export default function CartBodyComponent(props) {
  const { goods, items, handleRemove } = props;
  const rows = items.map((item, idx) => {
    const good = goods.get(item.get('id'));
    return (
      <tr key={idx}>
        <td>{good.get('title')}</td>
        <td>${good.get('price')}</td>
        <td>{item.get('amount')}</td>
        <td className="table__action">
          <button type="button"
                  className="table__button table__button--remove"
                  data-id={item.get('id')}
                  onClick={handleRemove}>Remove</button>
        </td>
      </tr>
    );
  }).toList();

  return (
    <tbody>{rows}</tbody>
  );
}
