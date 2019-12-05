import axios from '../../config/axios';
import {receiveUsers} from "../users/_actions";

export const RECEIVE_SPARK = 'RECEIVE_SPARK';
export const RECEIVE_SPARKS = 'RECEIVE_SPARKS';

export const receiveSpark = (spark) => ({
  type: RECEIVE_SPARK,
  spark
});

const receiveSparks = (sparks) => ({
  type: RECEIVE_SPARKS,
  sparks
});

export const getSparks = () => (dispatch) => {
  dispatch({type: 'GET_SPARK_START'});

  return axios({
    method: 'get',
    url: '/sparks'
  })
    .then(response => {
      dispatch({type: 'GET_SPARK_SUCCESS', response});

      dispatch(receiveSparks(response.data.sparks));
      dispatch(receiveUsers(response.data.users));

      return Promise.resolve(response);
    })
    .catch(error => {
      dispatch({type: 'GET_SPARK_FAIL', error});

      return Promise.reject(error);
    });
};