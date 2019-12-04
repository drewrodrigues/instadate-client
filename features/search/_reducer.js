import {CLEAR_SEARCH, RECEIVE_SEARCH} from './_action';

export default function(oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
  case RECEIVE_SEARCH:
    return action.search;
  case CLEAR_SEARCH:
    return [];
  default:
    return oldState;
  }
}
