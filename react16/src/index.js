import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.less';
import "antd-mobile/dist/antd-mobile.css";

import RouteMap from 'app/router/index';
import Reducer from 'app/reducers/index';
import api from 'app/middleware/api';

if (false) {
  const VConsole = require('vconsole');
  new VConsole();
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, api)
  // other store enhancers if any
);

const store = createStore(combineReducers({
  ...Reducer
}), enhancer);


ReactDOM.render((
  <Provider store={store}>
    <RouteMap />
  </Provider>
), document.getElementById('root'))
