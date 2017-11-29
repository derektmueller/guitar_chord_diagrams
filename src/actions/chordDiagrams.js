import { 
  ADD_CHORD_DIAGRAM, 
  REMOVE_CHORD_DIAGRAM, 
  SET_CHORD_DIAGRAMS 
} from './constants';

export function addChordDiagram(config) {
  return {
    type: ADD_CHORD_DIAGRAM,
    payload: config
  }
}

export function removeChordDiagram(index) {
  return {
    type: REMOVE_CHORD_DIAGRAM,
    payload: { index }
  }
}

export function setChordDiagrams(configJSON) {
  return {
    type: SET_CHORD_DIAGRAMS,
    payload: { configJSON }
  }
}
