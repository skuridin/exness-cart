import React from 'react';
import Head from './CartTableHeadComponent';
import Body from './CartTableBodyComponent';
import Foot from './CartTableFootComponent';

export default function CartTableComponent(props) {
  const { goods, items, handleRemove, handleSort } = props;
  return (
    <table>
      <Head handleSort={handleSort} />
      <Body goods={goods} items={items} handleRemove={handleRemove} />
      <Foot goods={goods} items={items} />
    </table>
  );
}
