import axios from '../../config/axios';

export const getProfile = (userId) => (dispatch) => {
  dispatch({type: 'GET_PROFILE_START'});

  return axios({
    method: 'get',
    url: `/users/${userId}`
  })
    .then((response) => {
      dispatch({type: 'GET_PROFILE_SUCCESS', response});
      dispatch({type: RECEIVE})
    })
    .catch((error) => {
      dispatch({type: 'GET_PROFILE_FAIL', error});
    });
};