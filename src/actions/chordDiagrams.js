import { ADD_CHORD_DIAGRAM, REMOVE_CHORD_DIAGRAM } from './constants';

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
