import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addChordDiagram } from '../actions/chordDiagrams'

let ChordConfig = ({handleSubmit}) => {
  return (<form className='config' onSubmit={handleSubmit}>
    <Field name="title" component="input" type="text" />
    <Field name="notes" component="input" type="text" />
    <Field name="root" component="input" type="text" />
    <Field name="fretCount" component="input" type="text" />
    <Field name="tuning" component="input" type="text" />
    <button type="submit">Submit</button>
  </form>);
};

export default reduxForm({
  form: 'chord-config',
  onSubmit: (values, dispatch) => {
    dispatch(addChordDiagram(values));
    return false;
  }
})(ChordConfig);

