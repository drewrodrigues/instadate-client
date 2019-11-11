import axios from '../../../config/axios';

export function signUp(user) {
  return axios({
    method: 'post',
    url: '/users',
    data: { user }
  })
}