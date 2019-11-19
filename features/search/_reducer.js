import { RECEIVE_SEARCH } from "./_action";

export default function(oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.search;
    default:
      return oldState;
  }
}