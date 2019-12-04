import axios from '../../config/axios';

// to be used when signing up
export const uploadImage = async (picture) => {
  return await axios({
    method: 'post',
    url: '/pictures',
    data: {picture},
  });
};
