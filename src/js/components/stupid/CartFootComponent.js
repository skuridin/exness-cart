import React from 'react';

export default function CartFootComponent(props) {
  const { goods, items, handleSave, save } = props;
  let saveMessage;
  const total = items.reduce((state, item) => {
    return state + item.get('amount') * goods.get(item.get('id')).get('price');
  }, 0);

  if (save !== null) {
    saveMessage = save ? 'Saved!' : 'Not saved!';
  }

  return (
    <tfoot>
      <tr>
        <td>Total:</td>
        <td>${total}</td>
        <td>{saveMessage}</td>
        <td className="table__action">
          <button type="button"
                  className="table__button"
                  onClick={handleSave}>Save</button>
        </td>
      </tr>
    </tfoot>
  );
}
