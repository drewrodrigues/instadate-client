import {RECEIVE_SESSION} from './_actions';
import {CLEAR_SESSION} from '../settings/_actions';

export default function(oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
  case RECEIVE_SESSION:
    return action.session;
  case CLEAR_SESSION:
    return {};
  default:
    return oldState;
  }
}
