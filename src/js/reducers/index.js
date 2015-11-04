import { combineReducers } from 'redux';
import goods from './goodsReducer';
import cartItems from './cartItemsReducer';
import sort from './sortReducer';
import save from './saveReducer';

export default combineReducers({ goods, cartItems, sort, save });
