import React from 'react';
import Navigation from './components/navigation';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import sessionReducer from './features/session/_reducer';
import { AsyncStorage } from 'react-native';
import dateReducer from './features/dates/_reducer';
import searchReducer from './features/search/_reducer';
import userReducer from './features/users/_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

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
        combineReducers({
          session: sessionReducer,
          date: dateReducer,
          search: searchReducer,
          users: userReducer
        }),
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
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