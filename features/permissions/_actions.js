import * as Permissions from 'expo-permissions';

export const LOCATION_PERMISSION_ACCEPTED = 'LOCATION_PERMISSION_ACCEPTED';
export const LOCATION_PERMISSION_REJECTED = 'LOCATION_PERMISSION_REJECTED';

const locationPermissionAccepted = ({
  type: LOCATION_PERMISSION_ACCEPTED
});

const locationPermissionRejected = ({
  type: LOCATION_PERMISSION_REJECTED
});

export const askForLocationPermission = () => async dispatch => {
  dispatch({ type: 'LOCATION_PERMISSION_START' });

  const { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status === 'granted') {
    dispatch(locationPermissionAccepted)
  } else {
    dispatch(locationPermissionRejected)
  }
};