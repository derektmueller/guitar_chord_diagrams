import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import chordDiagrams from './chordDiagrams';

export default combineReducers({
  chordDiagrams,
  form: formReducer
});
