import {AsyncStorage} from 'react-native';

export const CLEAR_SESSION = 'CLEAR_SESSION';

const clearSession = {
  type: CLEAR_SESSION,
};

export const logout = () => (dispatch) => {
  AsyncStorage.removeItem('@session');
  dispatch(clearSession);
};
