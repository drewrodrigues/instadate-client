import axios from '../../config/axios';
import {getCoordinates} from '../permissions/_actions';

export const RECEIVE_DATE = 'RECEIVE_DATE';
export const RECEIVE_DATES = 'RECEIVE_DATES';

const receiveDate = (date) => ({
  type: RECEIVE_DATE,
  date,
});

const receiveDates = (dates) => ({
  type: RECEIVE_DATES,
  dates,
});

export const createOrUpdateDate = (instadate, action) => async (dispatch) => {
  dispatch({type: `${action}_DATE_START`});

  const {latitude, longitude} = await getCoordinates();

  return axios({
    method: (action === 'CREATE' ? 'post' : 'patch'),
    url: '/instadates',
    data: {instadate: {...instadate, latitude, longitude}},
  })
    .then((response) => {
      dispatch({type: `${action}_DATE_SUCCESS`, response: response.data});

      dispatch(receiveDate(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch({type: `${action}_DATE_FAIL`, error: error.response.data});

      return Promise.reject(error.response.data);
    });
};

export const getDates = () => (dispatch) => {
  dispatch({type: 'GET_DATE_START'});

  return axios({
    method: 'get',
    url: `/instadates`,
  })
    .then((response) => {
      dispatch({type: 'GET_DATE_SUCCESS', response: response.data});

      dispatch(receiveDates(response.data.dates));
      return Promise.resolve(response.data.dates);
    })
    .catch((error) => {
      dispatch({type: 'GET_DATE_FAIL', error: error.response.data});

      return Promise.reject(error.response.data);
    });
};
