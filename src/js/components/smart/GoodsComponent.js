import React from 'react';
import { connect } from 'react-redux';
import GoodsTable from '../stupid/GoodsTableComponent';
import { addItem } from '../../actions';

class GoodsComponent extends React.Component {
  handleAdd(event) {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    this.props.dispatch(addItem(id));
  }
  render() {
    return (
      <GoodsTable goods={this.props.goods}
                  handleAdd={this.handleAdd.bind(this)} />
    );
  }
}

GoodsComponent.propTypes = {
  goods: React.PropTypes.object,
  dispatch: React.PropTypes.func
};

export default connect(state => ({ goods: state.goods }))(GoodsComponent);
