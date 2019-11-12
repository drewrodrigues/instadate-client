import React from 'react';

// navigation ------------------------------------------------------------------
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator({
  Landing: { screen: Landing },
  SignUp: { screen: SignUp },
  Login: { screen: Login }
}, {
  // headerMode: 'none' // comment out when need to go `back`
});

const Navigator = createAppContainer(Stack);

// components ------------------------------------------------------------------
import SignUp from './features/session/signUp';
import Login from './features/session/login';
import Landing from './features/pages/landing';

// redux -----------------------------------------------------------------------
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sessionReducer from './features/session/_reducer';

const store = createStore(
  combineReducers({ session: sessionReducer }),
  applyMiddleware(thunk)
);

window.store = store;

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}