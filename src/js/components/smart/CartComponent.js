import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import Head from '../stupid/CartHeadComponent';
import Body from '../stupid/CartBodyComponent';
import Foot from '../stupid/CartFootComponent';
import { removeItem, sort, save } from '../../actions';

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
  handleSave(event) {
    event.preventDefault();
    this.props.dispatch(save());
  }
  render() {
    const { goods, items } = this.props;
    return (
      <table>
        <Head handleSort={this.handleSort.bind(this)} />
        <Body goods={goods} items={items}
              handleRemove={this.handleRemove.bind(this)} />
        <Foot goods={goods} items={items}
              handleSave={this.handleSave.bind(this)}
              save={this.props.save} />
      </table>
    );
  }
}

CartComponent.propTypes = {
  goods: React.PropTypes.instanceOf(Immutable.Map),
  items: React.PropTypes.instanceOf(Immutable.List),
  dispatch: React.PropTypes.func,
  save: React.PropTypes.bool
};

function selector(state) {
  return {
    goods: state.goods,
    items: state.cartItems,
    save: state.save
  };
}

export default connect(selector)(CartComponent);
