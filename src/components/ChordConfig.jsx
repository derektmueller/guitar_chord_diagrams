import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addChordDiagram } from '../actions/chordDiagrams'

let ChordConfig = ({handleSubmit}) => {
  return (<form className='config' onSubmit={handleSubmit}>
    <div className='input-container'>
      <label htmlFor="title">Title</label>
      <Field name="title" component="input" type="text" />
    </div>
    <div className='input-container'>
      <label htmlFor="notes">Notes</label>
      <Field name="notes" component="input" type="text" />
    </div>
    <div className='input-container'>
      <label htmlFor="root">Root Note</label>
      <Field name="root" component="input" type="text" />
    </div>
    <div className='input-container'>
      <label htmlFor="fretCount">Number of Frets</label>
      <Field name="fretCount" component="input" type="number" 
        placeholder="23" />
    </div>
    <div className='input-container'>
      <label htmlFor="tuning">Tuning</label>
      <Field name="tuning" component="input" type="text" 
        placeholder="e a d g b e" />
    </div>
    <button type="submit">Create Diagram</button>
  </form>);
};

export default reduxForm({
  form: 'chord-config',
  onSubmit: (values, dispatch) => {
    dispatch(addChordDiagram(values));
  }
})(ChordConfig);

