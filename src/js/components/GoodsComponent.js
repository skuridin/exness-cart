import React from 'react';
const goods = require('../goods');

export default function GoodsComponent({ addItemHandler }) {
  return (
    <div className="goods">
      {Object.keys(goods).map((title, idx) => {
        return (
          <div className="goods__item" key={idx}>
            <div className="good">
              <span className="good__title">{title}</span>
              <span className="good__price">{goods[title]}</span>
              <a href="#" className="good__add" onClick={addItemHandler}>Buy</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
