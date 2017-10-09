import React from 'react';
import ChordDiagrams from '../../lib/ChordDiagrams.js';

export default class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);

    this.tuning = props.tuning;
    this.fretCount = props.fretCount || 13;
    this.chordDiagrams = props.diagram || new ChordDiagrams({
      fretCount: this.fretCount, 
      tuning: this.tuning, 
      notes: props.chord.join(' ')
    });
    this.colorPalette = props.colorPalette;
    this.root = props.root;

    this.state = { 
      diagram: this.chordDiagrams.getDiagram()
    }
  }

  fretWidth() {
    return 1 / (this.fretCount) * 100;
  }

  stringSpacing() {
    return 1 / (this.chordDiagrams.tuning.length) * 100;
  }

  renderFrets() {
    return (<div className='frets'>
      {(new Array(this.chordDiagrams.fretCount).fill(null)).map(
        (_, i) => {
          return <div className='fret' key={i} 
            style={{width: `${this.fretWidth()}%`}}></div>;
        })}
    </div>);
  }

  renderNoteLabel(note) {
    return note.split('').map((elem, i) => {
      switch(elem) {
        case '#':
          return <sup key={i}>{elem}</sup>;
        default:
          return <div key={i}>{elem}</div>;
      }
    });
  }

  renderNote(note, i) {
    return note ? 
      (<div 
        className={`note ${this.root === note ? ' root' : ''}`}
        key={`node-${i}`} 
        style={{
          left: `${i * this.fretWidth()}%`,
          background: `#${this.colorPalette[note]}`
        }}>{this.renderNoteLabel(note)}
      </div>) : null;
  }

  renderString(string, i) {
    return (
      <div style={{height: `${this.stringSpacing()}%`}} 
        className='string-container' key={i}>

        {[<div className='string' key={`string-${i}`}></div>]
          .concat(string.map(this.renderNote.bind(this)))}
      </div>);
  }

  renderStrings() {
    return this.state.diagram.map(this.renderString.bind(this));
  }

  renderDot(fret, i) {
    return <div className='dot'
      key={i}
      style={{
        left: 
          `${fret * this.fretWidth() - this.fretWidth() / 2}%`,
      }}>
      </div>;
  }

  renderDots() {
    return [3, 5, 7, 9, 15, 17]
      .filter((fret) => fret < this.fretCount)
      .map(this.renderDot.bind(this));
  }

  renderDoubleDots() {
    return <div className='double-dots'>
      {[12, 12]
        .filter((fret) => fret < this.fretCount)
        .map(this.renderDot.bind(this))}
      </div>;
  }

  render() {
    return (
     <div className='chord-diagram'>
        <div className='title'>{this.props.title}</div>
        <div className='fretboard'>
          {this.renderStrings()}
          {this.renderFrets()}
          {this.renderDots()}
          {this.renderDoubleDots()}
        </div>
     </div>
    )
  }
}
