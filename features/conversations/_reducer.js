import {RECEIVE_CONVERSATION, RECEIVE_CONVERSATIONS} from "./_actions";

export default function(oldState = [], action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CONVERSATION:
      const newConversations = Array.from(oldState);
      newConversations.push(action.conversation);
      return newConversations;
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    default:
      return oldState;
  }
}
