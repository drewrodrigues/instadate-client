import { RECEIVE_DATES } from "./_action";

export default function(oldState = [], action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_DATES:
      return action.dates;
    default:
      return oldState;
  }
}