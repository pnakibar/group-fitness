import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppNavigator from './components/AppNavigator';

import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
