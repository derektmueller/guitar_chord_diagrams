import React from 'react';
import ChordDiagrams from '../../lib/ChordDiagrams.js';

export default class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);

    this.chordDiagrams = new ChordDiagrams({fretCount: 23});

    this.state = { 
      diagram: this.chordDiagrams.getDiagram("e g# f#")
    }
  }

  fretWidth() {
    return 1 / (this.chordDiagrams.fretCount) * 100;
  }

  renderFrets() {
    return (<div className='frets'>
      {(new Array(this.chordDiagrams.fretCount).fill(null)).map((_, i) => {
        return <div className='fret' key={i} style={{width: `${this.fretWidth()}%`}}></div>;
      })}
    </div>);
  }

  renderStrings() {
  }

  render() {
    return (
     <div className='chord-diagram'>
        <div className='fretboard'>
          {this.renderStrings()}
          {this.renderFrets()}
        </div>
     </div>
    )
  }
}
