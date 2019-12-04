import { RECEIVE_DATE, RECEIVE_DATES } from "./_action";

export default function(oldState = [], action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_DATES:
      return action.dates;
    case RECEIVE_DATE:
      return oldState.map(date => date.id === action.date.id ? action.date : date);
    default:
      return oldState;
  }
}