import "babel-polyfill";
import UrlState from '../../src/middleware/urlState.js';

let reducers = {
  reducer1: () => {
    return { someKey: 'someVal' };
  },
  reducer2: () => {}
};

jest.mock('query-string', () => {
  return {
    parse: () => {
      return {reducer1: { someKey: 'someVal' }};
    }
  };
});

describe("urlStateSpec", () => {
  describe('getMiddleware', () => { 
    beforeEach(() => {
      history.replaceState = jest.fn();
    });

    it(
      `returns middleware that updates querystring with state and 
        calls next`, 
      () => {
        let state = {
          reducer1: { someKey: 'someVal' },
          reducer2: { someKey2: 'someVal2' }
        };
        let store = {
          getState: () => state
        };
        let result = 'some-result';
        let action = 'some-action';
        let next = jest.fn(() => result);

        expect(
          new UrlState(reducers).getMiddleware()(store)(next)(action))
          .toEqual(result);

        expect(history.replaceState).toHaveBeenCalledWith(
          null, '',
          "?reducer1={\"someKey\":\"someVal\"}&" + 
          "reducer2={\"someKey2\":\"someVal2\"}");
      });
  });

  describe('getPreloadedState', () => {
    it("parses preloaded state from querystring", () => {
      expect(new UrlState(reducers).getPreloadedState())
        .toEqual({
          reducer1: { someKey: 'someVal' }
        });
    });
  }); 
});
