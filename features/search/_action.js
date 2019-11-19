import axios from '../../config/axios';
import { receiveUsers } from "../users/_actions";

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = search => ({
  type: RECEIVE_SEARCH,
  search
});

export const search = () => dispatch => {
  return axios({
    method: 'get',
    url: '/instadates'
  })
  .then(res => {
    dispatch(receiveSearch(res.data.dates));
    dispatch(receiveUsers(res.data.users));
    return Promise.resolve(res.data);
  })
  .catch(err => {
    return Promise.reject(err.response.data);
  });
};