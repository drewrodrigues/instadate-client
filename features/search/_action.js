import axios from '../../config/axios';
import {receiveUsers} from '../users/_actions';
import {getCoordinates} from '../permissions/_actions';
import {receiveSpark} from '../sparks/_actions';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearch = (search) => ({
  type: RECEIVE_SEARCH,
  search,
});

export const clearSearch = ({
  type: CLEAR_SEARCH,
});

export const search = (distance) => async (dispatch) => {
  dispatch({type: 'SEARCH_START'});
  const coordinates = await getCoordinates();

  return axios({
    method: 'get',
    url: '/search',
    params: {...coordinates, distance},
  })
    .then((res) => {
      dispatch({type: 'SEARCH_SUCCESS'});

      dispatch(receiveSearch(res.data.dates));
      dispatch(receiveUsers(res.data.users));
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      dispatch({type: 'SEARCH_FAIL', error: err});

      return Promise.reject(err.response.data);
    });
};

export const sendSpark = (spark) => (dispatch) => {
  dispatch({type: 'SEND_SPARK_START'});

  return axios({
    method: 'post',
    url: '/sparks',
    data: { spark }
  })
    .then((response) => {
      dispatch({type: 'SEND_SPARK_SUCCESS', response});
      dispatch(receiveSpark(response.data));
    }).catch((error) => {
      dispatch({type: 'SEND_SPARK_FAIL', error});
    });
};