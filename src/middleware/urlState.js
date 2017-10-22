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
          map(([stateKey, state]) => {
            return {[stateKey]: this.parseUrlState(
              stateKey, state)};
          })));
  }

  private

  parseUrlState(stateKey, state) {
    let urlState;

    try {
      urlState = JSON.parse(state);
    } catch(e) {
      urlState = this.reducers[stateKey](undefined, {type: null});
    }

    return urlState;
  }

  getQueryString(state) {
    return `?${Object.keys(this.reducers).map((reducerName) => {
      return `${reducerName}=${JSON.stringify(state[reducerName])}`;
    }).join('&')}`;
  }
}

