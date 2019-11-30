import axios from '../../config/axios';
import * as Location from 'expo-location';

export const RECEIVE_DATES = 'RECEIVE_DATES';

const receiveDate = dates => ({
  type: RECEIVE_DATES,
  dates
});

export const createDate = instadate => async (dispatch) => {
  dispatch({ type: 'CREATE_DATE_START '});

  const position = await Location.getCurrentPositionAsync();
  const { latitude, longitude } = position.coords;

  return axios({
    method: 'post',
    url: '/instadates',
    data: { instadate: { ...instadate, latitude, longitude } }
  })
  .then(res => {
    dispatch({ TYPE: 'CREATE_DATE_SUCCESS' });

    dispatch(receiveDate(res.data));
    return Promise.resolve(res.data);
  })
  .catch(err => {
    dispatch({ type: 'CREATE_DATE_FAIL' });

    return Promise.reject(err.response.data);
  });
};

export const getDate = creator_id => dispatch => {
  dispatch({ type: 'GET_DATE_START' });

  return axios({
    method: 'get',
    url: `/instadates?creator_id=${creator_id}`
  })
  .then(res => {
    dispatch({ type: 'GET_DATE_SUCCESS', response: res.data });

    dispatch(receiveDate(res.data.dates));
    return Promise.resolve(res.data.dates);
  })
  .catch(err => {
    dispatch({ type: 'GET_DATE_FAIL', error: err.response.data });

    return Promise.reject(err.response.data);
  });
};