import axios from "axios";

export default axios.create({
  baseURL: 'http://10.0.0.64:3000',
  headers: {
    Accept: 'application/json'
  }
});