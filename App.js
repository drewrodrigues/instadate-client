import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/navigation';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sessionReducer from './features/session/_reducer';

const store = createStore(
  combineReducers({ session: sessionReducer }),
  applyMiddleware(thunk)
);

window.store = store;

export default function App(props) {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}