import "babel-polyfill";

describe("urlStateSpec", () => {
  const state = {
    reducer1: { someKey: 'someVal' },
    reducer2: { someKey2: 'someVal2' }
  };
  const reducers = [
    'reducer1',
    'reducer2'
  ];

  describe('getMiddleware', () => { 
    beforeEach(() => {
      history.replaceState = jest.fn();
    });

    it(
      `returns middleware that updates querystring with state and 
        calls next`, 
      () => {
        const UrlState = require(
          '../../src/middleware/urlState.js').default;

        const store = {
          getState: () => state
        };
        const result = 'some-result';
        const action = 'some-action';

        const next = jest.fn(() => result);

        expect(
          new UrlState(reducers).getMiddleware()(store)(next)(action))
          .toEqual(result);

        expect(history.replaceState).toHaveBeenCalledWith(
          null, '',
          `?reducer1=${
            encodeURIComponent("{\"someKey\":\"someVal\"}")}&` + 
          `reducer2=${
            encodeURIComponent("{\"someKey2\":\"someVal2\"}")}`);
      });
  });

  describe('getPreloadedState', () => {
    let parsedQueryString;

    jest.doMock('query-string', () => {
      return {
        parse: () => {
          return {
            reducer1: "{\"someKey\":\"someVal\"}",
            reducer2: "state can't be parsed",
            reducer3: "{\"someKey\":\"someVal\"}"
          };
        }
      };
    });

    it("parses preloaded state from querystring", () => {
      const UrlState = require(
        '../../src/middleware/urlState.js').default;

      expect(new UrlState(reducers).getPreloadedState())
        .toEqual({
          reducer1: state.reducer1
        });
    });
  }); 
});
