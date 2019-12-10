import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import SignUp from '../features/session/signUp';
import Login from '../features/session/login';
import Landing from '../features/pages/landing';
import Search from '../features/search/search';
import Dates from '../features/dates/dates';
import Conversations from '../features/conversations/converations';
import Profile from '../features/profile/profile';
import Settings from '../features/settings/settings';
import Sparks from '../features/sparks/sparks';
import LocationPermission from '../features/permissions/locationPermission';

function Navigation(props) {
  let Navigation = null;
  const Stack = createStackNavigator({
    Landing: {screen: Landing},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
  }, {headerMode: 'none'});

  const Tabs = createBottomTabNavigator(
    {
      Search: {
        screen: Search,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name='search' size={24} color={tintColor} />
          ),
        }),
      },
      Sparks: {
        screen: function() {
          return <Sparks />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name='bell' size={24} color={tintColor} />
          ),
        }),
      },
      Dates: {
        screen: function() {
          return <Conversations />;
        },
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name='comments' size={42} color={tintColor} />
          ),
        }),
      },
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name='user' size={24} color={tintColor} />
          ),
        }),
      },
      Settings: {
        screen: Settings,
        navigationOptions: () => ({
          tabBarIcon: ({tintColor}) => (
            <FontAwesome name='cog' size={24} color={tintColor} />
          ),
        }),
      },
    },
    {
      tabBarOptions: {
        activeTintColor: 'red',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        inactiveTintColor: '#e9ebee',
        labelStyle: {marginTop: 5},
        showLabel: false,
        style: styles.bottomNav,
        tabStyle: styles.bottomNavTab,
      },
    },
  );

  if (props.loggedIn) {
    if (!props.locationPermissionAccepted) {
      return <LocationPermission />;
    }
    Navigation = Tabs;
  } else {
    Navigation = Stack;
  }

  Navigation = createAppContainer(Navigation);

  return <Navigation />;
}

const styles = StyleSheet.create({
  bottomNav: {
    bottom: -34,
    height: 75,
    marginTop: -35,
    backgroundColor: 'red',
    borderTopWidth: 0,
  },
  bottomNavTab: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const mapStateToProp = (state) => ({
  loggedIn: state.session.session_token,
  locationPermissionAccepted: state.permissions.location === 'accepted',
});

export default connect(mapStateToProp)(Navigation);
