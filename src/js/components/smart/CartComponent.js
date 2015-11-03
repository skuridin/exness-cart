import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CartTable from '../stupid/CartTableComponent';
import { removeItem } from '../../actions';

class CartComponent extends React.Component {
  handleRemove(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    this.props.dispatch(removeItem(id));
  }
  render() {
    return (
      <CartTable goods={this.props.goods}
                 items={this.props.items}
                 handleRemove={this.handleRemove.bind(this)} />
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
