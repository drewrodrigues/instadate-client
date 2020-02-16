export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const sendMessage = () => (dispatch) => {
  dispatch({type: 'SEND_MESSAGE_START'});

  return axios({
    method: 'post',
    url: '/messages'
  })
    .then((response) => {
      dispatch({type: 'SEND_MESSAGE_SUCCESS', response});
      dispatch(receiveMessage(response.data.message));

      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch({type: 'SEND_MESSAGE_FAIL', error});
      return Promise.reject(error);
    });
};