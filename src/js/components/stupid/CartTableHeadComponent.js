import React from 'react';

export default function CartTableHeadComponent({ handleSort }) {
  return (
    <thead>
      <tr>
        <th><a href="#" onClick={handleSort} data-by="title">Title</a></th>
        <th><a href="#" onClick={handleSort} data-by="price">Price</a></th>
        <th><a href="#" onClick={handleSort} data-by="amount">Amount</a></th>
        <th></th>
      </tr>
    </thead>
  );
}
