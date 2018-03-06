import React from 'react';
import ChordConfigCreator from '../../lib/ChordConfigCreator';
import { setChordDiagrams } from '../actions/chordDiagrams';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ChromaticScale from '../../lib/ChromaticScale.js';

export class Index extends React.Component {
  render() {
    return (
      <div id='home'>
        <div className='chords'>
          <h2>Chords</h2>
        </div>
        <div className='arpeggios'>
          <h2>Arpeggios</h2>
          {this.renderArpeggioLinks()}
        </div>
      </div>);
  }

  renderArpeggioLinks() {
    let scale = new ChromaticScale;
    let notes = scale.sharps.map((str) => str.toUpperCase());
    let chordTypes = ['7', '-7', 'maj7', '-'];
    let allChords = chordTypes.map((type) => {
      return notes.map((note) => `${note}${type}`);
    }).reduce((x, acc) => acc.concat(x), []);

    return allChords.map((chord) => {
      return <Link to='/editor' className={chord} key={chord} 
        onClick={() => {
          this.props.setChordDiagrams(JSON.stringify
            (new ChordConfigCreator({
              description: `${chord} arpeggios`
            }).get()));
        }}>{chord}</Link>;
    });
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
