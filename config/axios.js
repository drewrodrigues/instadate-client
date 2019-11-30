import axios from "axios";
import getEnvVars from "../environment";
import { AsyncStorage } from 'react-native';

const { apiUrl } = getEnvVars();

// pull cookie from async storage then send it with request
export default async (params) => {
  const token = await _getToken();
  return axios.create({
    baseURL: apiUrl,
    headers: {
      Accept: 'application/json',
      Authorization: token
    },
    withCredentials: 'omit'
  })(params);
}

// helpers

// pull cookie from Async storage
const _getToken = async () => {
  const session = await AsyncStorage.getItem('@session');
  return (session ? JSON.parse(session).session_token : '');
};