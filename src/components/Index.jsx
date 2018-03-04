import React from 'react';
import ChordConfigCreator from '../../lib/ChordConfigCreator';
import { setChordDiagrams } from '../actions/chordDiagrams';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Index extends React.Component {
  render() {
    return (
      <div id='home'>
        <div className='chords'>
          <h2>Chords</h2>
        </div>
        <div className='arpeggios'>
          <h2>Arpeggios</h2>
          <Link to='/editor' className='Amaj7' onClick={() => {
            this.props.setChordDiagrams(JSON.stringify
              (new ChordConfigCreator({
                description: 'Amaj7 arpeggios'
              }).get()));
          }}>Amaj7</Link>
        </div>
      </div>);
  }
}

export default connect(
  null,
  dispatch => { 
    return { 
      setChordDiagrams: (index) => {
        return dispatch(setChordDiagrams(index));
      }
    }; 
  }
)(Index);
