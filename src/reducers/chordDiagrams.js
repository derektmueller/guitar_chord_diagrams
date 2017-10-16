import { 
  ADD_CHORD_DIAGRAM, REMOVE_CHORD_DIAGRAM 
} from '../actions/constants';

export default function chordDiagrams(state=[], action) {
  switch (action.type) {
    case ADD_CHORD_DIAGRAM:
      return state.concat([action.payload]);
    case REMOVE_CHORD_DIAGRAM:
      return state.filter((_, i) => i != action.payload.index);
    default:
      return state
  }
}
