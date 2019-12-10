import axios from '../../config/axios';

export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const getConversations = () => (dispatch) => {
  dispatch({type: 'GET_CONVERSATION_START'});

  return axios({
    method: 'get',
    url: '/conversations'
  })
    .then((response) => {
      dispatch({type: 'GET_CONVERSATION_SUCCESS', response});
      dispatch(receiveConversations(response.data.conversations));
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch({type: 'GET_CONVERSATION_FAIL', error});
      return Promise.reject(error);
    });
};