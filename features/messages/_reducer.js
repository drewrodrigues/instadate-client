import {RECEIVE_MESSAGE, RECEIVE_MESSAGES} from "./_actions";

export default function(oldState = [], action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      const newState = Array.from(oldState);
      newState.push(action.message);
      return newState;
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return oldState;
  }
}
