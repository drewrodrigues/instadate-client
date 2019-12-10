export const otherUser = (state, accepting_user_id, requesting_user_id) => {
  const userIdToFind = (state.session.id === accepting_user_id ? requesting_user_id : accepting_user_id);
  return state.users.find(user => user.id === userIdToFind);
};