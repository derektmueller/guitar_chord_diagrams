import { ADD_CHORD_DIAGRAM } from '../actions/constants';

export default function chordDiagrams(state=[], action) {
  switch (action.type) {
    case ADD_CHORD_DIAGRAM:
      return state.concat([action.payload]);
    default:
      return state
  }
}
