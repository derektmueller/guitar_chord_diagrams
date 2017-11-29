import chordDiagrams from '../../src/reducers/chordDiagrams';
import { 
  ADD_CHORD_DIAGRAM, REMOVE_CHORD_DIAGRAM, SET_CHORD_DIAGRAMS
} from '../../src/actions/constants';

describe("chordDiagrams", () => {
  describe("initial state", () => {
    it("returns an empty array", () => {
      expect(chordDiagrams(undefined, {})).toEqual([]);
    });
  });

  describe("ADD_CHORD_DIAGRAM", () => {
    it("adds a chord diagram", () => {
      let payload = {
        someKey: 'some-value'
      };
      let initalState = [];

      expect(chordDiagrams(initalState, {
        type: ADD_CHORD_DIAGRAM,
        payload
      })).toEqual([
        payload
      ]);
      expect(initalState).toEqual([]);
    });
  });

  describe("REMOVE_CHORD_DIAGRAM", () => {
    it("removes a chord diagram", () => {
      let payload = {
        index: 0
      };
      let initalState = [{a: 1}, {b: 2}];

      expect(chordDiagrams(initalState, {
        type: REMOVE_CHORD_DIAGRAM,
        payload
      })).toEqual([
        {b: 2}
      ]);
      expect(initalState).toEqual([{a: 1}, {b: 2}]);
    });
  });

  describe("SET_CHORD_DIAGRAMS", () => {
    it("sets chord diagrams", () => {
      let config = [{a: 1}, {b: 2}];
      let payload = {
        configJSON: JSON.stringify(config)
      };

      expect(chordDiagrams([], {
        type: SET_CHORD_DIAGRAMS,
        payload
      })).toEqual(config);
    });
  });
});
