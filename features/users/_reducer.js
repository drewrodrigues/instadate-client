import { RECEIVE_USERS } from "./_actions";

export default function(oldState = [], action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return oldState;
  }
}