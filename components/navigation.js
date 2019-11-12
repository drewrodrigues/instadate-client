import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../features/session/signUp';
import Login from '../features/session/login';
import Landing from '../features/pages/landing';
import Search from '../features/search/search';
import Profile from "../features/profile/profile";
import Settings from "../features/settings/settings";

function Navigation(props) {
  let Navigation = null;
  const Stack = createStackNavigator({
    Landing: { screen: Landing },
    SignUp: { screen: SignUp },
    Login: { screen: Login },
  });

  const Tabs = createBottomTabNavigator({
    Search: Search,
    Profile: Profile,
    Settings: Settings
  });

  console.log(window.store.getState().session);

  if (props.loggedIn) {
    console.log('Tabs nav');
    Navigation = Tabs;
  } else {
    console.log('Stack nav');
    Navigation = Stack;
  }

  Navigation = createAppContainer(Navigation);

  return <Navigation />
}

const mapStateToProp = state => ({
  loggedIn: state.session.session_token
});

export default connect(mapStateToProp)(Navigation);