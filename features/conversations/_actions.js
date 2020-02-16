import axios from '../../config/axios';
import {receiveUsers} from "../users/_actions";
import {receiveMessages} from '../messages/_actions';

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
      dispatch({type: 'GET_CONVERSATIONS_SUCCESS', response});
      dispatch(receiveConversations(response.data.conversations));
      dispatch(receiveMessages(response.data.messages));
      dispatch(receiveUsers(response.data.users));
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch({type: 'GET_CONVERSATIONS_FAIL', error});
      return Promise.reject(error);
    });
};

export const getConversation = (id) => (dispatch) => {
  dispatch({type: 'GET_CONVERSATION_START'});

  return axios({
    method: 'get',
    url: `/conversations/${id}`
  })
    .then((response) => {
      dispatch({type: 'GET_CONVERSATION_SUCCESS', response});
      dispatch(receiveConversation(response.data.conversation));
      dispatch(receiveMessages(response.data.messages));
      return Promise.resolve(response);
    })
    .catch((error) => {
      dispatch({type: 'GET_CONVERSATION_FAIL', error});
      return Promise.reject(error);
    });
};