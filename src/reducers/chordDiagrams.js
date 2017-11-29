import { 
  ADD_CHORD_DIAGRAM, REMOVE_CHORD_DIAGRAM, SET_CHORD_DIAGRAMS
} from '../actions/constants';

export default function chordDiagrams(state=[], action) {
  switch (action.type) {
    case ADD_CHORD_DIAGRAM:
      return state.concat([action.payload]);
    case REMOVE_CHORD_DIAGRAM:
      return state.filter((_, i) => i != action.payload.index);
    case SET_CHORD_DIAGRAMS:
      return JSON.parse(action.payload.configJSON);
    default:
      return state
  }
}
