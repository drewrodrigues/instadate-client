import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.0.64:3001'
});

export function SignUp(user) {
  return instance({
    method: 'post',
    url: '/users',
    data: { user }
  })
}