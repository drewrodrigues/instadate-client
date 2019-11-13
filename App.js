import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/navigation';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sessionReducer from './features/session/_reducer';
import { AsyncStorage } from 'react-native';

console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { store: null };
    this._checkSession();
  }

  async _checkSession() {
    let session = await AsyncStorage.getItem('@session');
    let preloadedState = {};

    if (session) {
      session = JSON.parse(session);
      preloadedState = { session };
    }

    this.setState({
      store: createStore(
        combineReducers({ session: sessionReducer }),
        preloadedState,
        applyMiddleware(thunk)
      )
    });
  }

  render() {
    if (!this.state.store) return null;

    window.store = this.state.store;

    return (
      <Provider store={this.state.store}>
        <Navigation />
      </Provider>
    )
  }
}