import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import reducers from '../reducers';
import UrlState from '../middleware/urlState';
import Routes from "./Routes.jsx";
const urlState = new UrlState(['chordDiagrams']);

const store = createStore(
  reducers,
  urlState.getPreloadedState(),
  applyMiddleware(urlState.getMiddleware()));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
