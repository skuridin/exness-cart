import { combineReducers } from 'redux';
import goods from './goodsReducer';
import cartItems from './cartItemsReducer';

export default combineReducers({ goods, cartItems });
