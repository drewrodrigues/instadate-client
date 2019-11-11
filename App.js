import React from 'react';
import SignUp from './features/sessions/signUp';
import Login from './features/sessions/login';
import Landing from './features/pages/landing';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Landing: { screen: Landing },
  SignUp: { screen: SignUp },
  Login: { screen: Login }
}, {
  // headerMode: 'none' // comment out when need to go `back`
});

const App = createAppContainer(MainNavigator);

export default App;
