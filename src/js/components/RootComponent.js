import React from 'react';
import Layout from './LayoutComponent';
import goods from '../goods.js';

export default class RootComponent extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      cart: {},
      sortBy: null,
      reversed: false,
      message: ''
    };
  }
  componentWillMount() {
    const dataFromLS = localStorage.getItem('data');
    if (dataFromLS) {
      try {
        this.setState(JSON.parse(dataFromLS));
      } catch (e) {
        console.error(e);
      }
    }
  }
  componentDidUpdate() {
    let newState = Object.assign({}, this.state);
    newState.message = '';
    localStorage.setItem('data', JSON.stringify(newState));
  }
  addItemHandler(e) {
    e.preventDefault();
    const parent = e.target.parentElement;
    const title = parent.querySelector('.good__title').textContent;
    let newState = Object.assign({}, this.state);
    newState.cart[title] = newState.cart[title] ? newState.cart[title] + 1 : 1;
    this.setState(newState);
  }
  removeItemHandler(e) {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    const title = parent.querySelector('td').textContent;
    let newState = Object.assign({}, this.state);
    if (newState.cart[title] === 1) {
      delete newState.cart[title];
    } else {
      newState.cart[title]--;
    }
    this.setState(newState);
  }
  sortHandler(e) {
    e.preventDefault();
    const term = e.target.textContent;
    let newState = Object.assign({}, this.state);
    const newKeys = Object.keys(newState.cart).sort((a, b) => {
      if (term === 'Price') {
        a = goods[a];
        b = goods[b];
      } else if (term === 'Quantity') {
        a = newState.cart[a];
        b = newState.cart[b];
      }
      if (a > b) {
        return -1;
      } else if (b > a) {
        return 1;
      }
      return -1;
    });
    if (newState.sortBy === term) {
      if (!newState.reversed) {
        newKeys.reverse();
      }
      newState.reversed = !newState.reversed;
    } else {
      newState.reversed = false;
    }
    newState.sortBy = term;
    let newCart = {};
    newKeys.forEach((title) => {
      newCart[title] = newState.cart[title];
    });
    newState.cart = newCart;
    this.setState(newState);
  }
  saveHandler(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    if (Date.now() % 2 === 0) {
      newState.message = 'Success! =)';
    } else {
      newState.message = 'Fail! =(';
    }
    this.setState(newState);
  }
  render() {
    return <Layout
      addItemHandler={this.addItemHandler.bind(this)}
      removeItemHandler={this.removeItemHandler.bind(this)}
      sortHandler={this.sortHandler.bind(this)}
      saveHandler={this.saveHandler.bind(this)}
      message={this.state.message}
      cart={this.state.cart} />;
  }
}
