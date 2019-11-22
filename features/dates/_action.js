import axios from '../../config/axios';

export const RECEIVE_DATE = 'RECEIVE_DATE';

const receiveDate = date => ({
  type: RECEIVE_DATE,
  date
});

export const createDate = instadate => dispatch => {
  dispatch({ type: 'CREATE_DATE_START '});

  return axios({
    method: 'post',
    url: '/instadates',
    data: { instadate }
  })
  .then(res => {
    dispatch(receiveDate(res.data));
    dispatch({ TYPE: 'CREATE_DATE_SUCCESS' });
    return Promise.resolve(res.data);
  })
  .catch(err => {
    dispatch({ type: 'CREATE_DATE_FAIL' });
    return Promise.reject(err.response.data);
  });
};

export const getDate = creator_id => dispatch => {
  return axios({
    method: 'get',
    url: `/instadates?creator_id=${creator_id}`
  })
  .then(res => {
    dispatch(receiveDate(res.data.dates));
    return Promise.resolve(res.data.dates);
  })
  .catch(err => {
    return Promise.reject(err.response.data);
  });
};