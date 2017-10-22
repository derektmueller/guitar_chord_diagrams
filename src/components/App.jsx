import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import chordDiagrams from '../reducers/chordDiagrams';
import reducers from '../reducers';
import UrlState from '../middleware/urlState';

const store = createStore(
  reducers,
  new UrlState({chordDiagrams}).getPreloadedState(),
  applyMiddleware(new UrlState({chordDiagrams}).getMiddleware()));

import Index from "./Index.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
