import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import CartTable from '../stupid/CartTableComponent';
import { removeItem, sort } from '../../actions';

class CartComponent extends React.Component {
  handleRemove(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    this.props.dispatch(removeItem(id));
  }
  handleSort(event) {
    event.preventDefault();
    const by = event.currentTarget.dataset.by;
    this.props.dispatch(sort(by));
  }
  render() {
    return (
      <CartTable goods={this.props.goods}
                 items={this.props.items}
                 handleSort={this.handleSort.bind(this)}
                 handleRemove={this.handleRemove.bind(this)} />
    );
  }
}

CartComponent.propTypes = {
  goods: React.PropTypes.instanceOf(Immutable.Map),
  items: React.PropTypes.instanceOf(Immutable.List),
  dispatch: React.PropTypes.func
};

const selector = ({ goods, cartItems }) => ({ goods, items: cartItems });
export default connect(selector)(CartComponent);
