import {
  LOCATION_PERMISSION_ACCEPTED,
  LOCATION_PERMISSION_REJECTED
} from "./_actions";

/*
- waiting
- accepted
- rejected
 */
const defaultState = {
  location: 'waiting'
};

export default function(oldState = defaultState, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case LOCATION_PERMISSION_ACCEPTED:
      return { ...oldState, location: 'accepted' };
    case LOCATION_PERMISSION_REJECTED:
      return { ...oldState, location: 'rejected' };
    default:
      return oldState;
  }
};