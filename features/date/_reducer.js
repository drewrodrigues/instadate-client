import { RECEIVE_DATE } from "./_action";

export default function(oldState = null, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_DATE:
      return Array.isArray(action.date) ? action.date[0] : action.date;
    default:
      return oldState;
  }
}