import {RECEIVE_SPARK, RECEIVE_SPARKS} from "./_actions";

export default function(oldState = [], action) {
  Object.assign(oldState);

  switch (action.type) {
  case RECEIVE_SPARK:
    const newState = Array.from(oldState);
    newState.push(action.spark);
    return newState;
  case RECEIVE_SPARKS:
    return action.sparks;
  default:
    return oldState;
  }
}