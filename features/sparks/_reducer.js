import {RECEIVE_SPARK, RECEIVE_SPARKS, REMOVE_SPARK} from "./_actions";

export default function(oldState = [], action) {
  Object.assign(oldState);

  switch (action.type) {
  case RECEIVE_SPARK:
    const newState = Array.from(oldState);
    newState.push(action.spark);
    return newState;
  case RECEIVE_SPARKS:
    return action.sparks;
  case REMOVE_SPARK:
    return oldState.filter(spark => spark.id != action.id);
  default:
    return oldState;
  }
}