import queryString from 'query-string';

export default class UrlState {
  constructor(reducers) {
    this.reducers = reducers;
  }

  getMiddleware() {
    return store => next => action => {
      let result = next(action);
        
      history.replaceState(
        null, '', 
        this.getQueryString(store.getState()));

      return result;
    };
  }

  getPreloadedState() {
    return Object.assign.apply(
      null, [{}].concat(
        Object.entries(queryString.parse(location.search)).
          filter(this.filterUnmappedParams.bind(this)).
          map(this.getReduxStateFromUrlState.bind(this))
        ));
  }

  private

  filterUnmappedParams([urlStateKey, _]) {
    return this.reducers.includes(urlStateKey);
  }

  getReduxStateFromUrlState([urlStateKey, urlStateValue]) {
    return {[urlStateKey]: this.parseUrlState(
      urlStateKey, urlStateValue)};
  }

  parseUrlState(stateKey, state) {
    let urlState;

    try {
      urlState = JSON.parse(state);
    } catch(e) {
      urlState = undefined;
    }

    return urlState;
  }

  getQueryString(state) {
    return `?${this.reducers.map((reducerName) => {
      return `${reducerName}=${
        encodeURIComponent(JSON.stringify(state[reducerName]))}`;
    }).join('&')}`;
  }
}

