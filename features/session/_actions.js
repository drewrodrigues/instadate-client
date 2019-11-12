import axios from "../../config/axios";
import { AsyncStorage } from 'react-native';

export const RECEIVE_SESSION = 'RECEIVE_SESSION';

const receiveSession = session => ({
  type: RECEIVE_SESSION,
  session
});

export const signUp = user => dispatch => {
  dispatch({ type: 'SIGN_UP_START' });

  return axios({
    method: 'post',
    url: '/users',
    data: { user }
  })
  .then(res => {
    dispatch(receiveSession(res.data));
    dispatch({ type: 'SIGN_UP_SUCCESS' });
    _storeSession(res.data);
    return Promise.resolve(res.data);
  })
  .catch(err => {
    dispatch({ type: 'SIGN_UP_FAIL' });
    return Promise.reject(err.response.data);
  });
};

export const login = session => dispatch => {
  dispatch({ type: 'LOGIN_START' });

  return axios({
    method: 'post',
    url: '/sessions',
    data: session
  })
  .then(res => {
    dispatch(receiveSession(res.data));
    dispatch({ type: 'LOGIN_SUCCESS' });
    _storeSession(res.data);
    return Promise.resolve(res.data);
  })
  .catch(err => {
    dispatch({ type: 'LOGIN_FAIL' });
    return Promise.reject(err.response.data)
  });
};

// helpers
async function _storeSession(session) {
  await AsyncStorage.setItem('@session', JSON.stringify(session));
}