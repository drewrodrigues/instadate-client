import axios from '../../../config/axios';

export function login(session) {
  return axios({
    method: 'post',
    url: '/sessions',
    data: session
  });
}