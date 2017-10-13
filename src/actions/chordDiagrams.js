import { ADD_CHORD_DIAGRAM } from './constants';

export function addChordDiagram(config) {
  return {
    type: ADD_CHORD_DIAGRAM,
    payload: config
  }
}
