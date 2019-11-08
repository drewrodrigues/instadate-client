import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './features/signUp';
import Login from './features/login';
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
