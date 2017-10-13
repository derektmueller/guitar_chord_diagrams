import chordDiagrams from '../../src/reducers/chordDiagrams';
import { ADD_CHORD_DIAGRAM } from '../../src/actions/constants';

describe("chordDiagrams", () => {
  describe("initial state", () => {
    it("returns an empty array", () => {
      expect(chordDiagrams(undefined, {})).toEqual([]);
    });
  });

  describe("ADD_CHORD_DIAGRAM", () => {
    it("returns an empty array", () => {
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
});
