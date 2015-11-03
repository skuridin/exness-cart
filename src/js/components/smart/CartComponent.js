import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CartTable from '../stupid/CartTableComponent';

class CartComponent extends React.Component {
  render() {
    return (
      <CartTable goods={this.props.goods}
                 items={this.props.items} />
    );
  }
}

CartComponent.propTypes = {
  goods: React.PropTypes.instanceOf(Immutable.Map),
  items: React.PropTypes.instanceOf(Immutable.List),
  dispatch: React.PropTypes.func
};

function selector(state) {
  return {
    goods: state.goods,
    items: state.cartItems
  };
}

export default connect(selector)(CartComponent);
