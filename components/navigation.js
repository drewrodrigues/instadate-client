import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import SignUp from '../features/session/signUp';
import Login from '../features/session/login';
import Landing from '../features/pages/landing';
import Search from '../features/search/search';
import Dates from '../features/dates/dates';
import Profile from "../features/profile/profile";
import Settings from "../features/settings/settings";

function Navigation(props) {
  let Navigation = null;
  const Stack = createStackNavigator({
    Landing: { screen: Landing },
    SignUp: { screen: SignUp },
    Login: { screen: Login },
  }, { headerMode: 'none' });

  const Tabs = createBottomTabNavigator(
    {
      Search: {
        screen: Search,
        navigationOptions: () => ({
          title: 'Search',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name='search' size={24} color={tintColor} />
          ),
        }),
      },
      Requests: {
        screen: function () {
          return <Text>Something</Text>
        },
        navigationOptions: () => ({
          title: 'Requests',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name='bell' size={24} color={tintColor} />
          ),
        }),
      },
      Dates: {
        screen: function () {
          return <Dates />
        },
        navigationOptions: () => ({
          title: 'Dates',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name='heart' size={24} color={tintColor} />
          ),
        }),
      },
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
          title: 'Profile',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name='user' size={24} color={tintColor} />
          ),
        }),
      },
      Settings: {
        screen: Settings,
        navigationOptions: () => ({
          title: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name='cog' size={24} color={tintColor} />
          ),
        }),
      }
    },
    {
      tabBarOptions: {
        activeTintColor: 'red',
        activeBackgroundColor: '#222',
        inactiveBackgroundColor: 'black',
        labelStyle: { marginTop: 5 },
        style: styles.bottomNav,
        tabStyle: styles.bottomNavTab
      },
    }
  );

  if (props.loggedIn) {
    Navigation = Tabs;
  } else {
    Navigation = Stack;
  }

  Navigation = createAppContainer(Navigation);

  return <Navigation />
}

const styles = StyleSheet.create({
  bottomNav: {
    bottom: -34,
    height: 75,
    marginTop: -34,
    backgroundColor: 'red'
  },
  bottomNavTab: {
    paddingTop: 10,
    paddingBottom: 10,
  }
});

const mapStateToProp = state => ({
  loggedIn: state.session.session_token
});

export default connect(mapStateToProp)(Navigation);