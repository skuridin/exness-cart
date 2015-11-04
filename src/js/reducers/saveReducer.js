import { SAVE } from '../actions';

/**
 * Save reducer
 * @param  {Boolean|null}  Default state
 * @return {Boolean|null}  New state
 */
export default function save(state = null, action) {
  switch (action.type) {
  case SAVE:
    return action.status;
  default:
    return state;
  }
}
