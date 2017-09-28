import React from 'react';
import ChordDiagrams from '../../lib/ChordDiagrams.js';

export default class ChordDiagram extends React.Component {
  constructor(props) {
    super(props);

    this.fretCount = 13;
    this.chordDiagrams = new ChordDiagrams({
      fretCount: this.fretCount});
    this.colorPalette = [
      'BB453C',
      '7D9F13',
      'E7DB84',
      'A2D2E9',
      '3EB88D'
    ];
    this.chord = ['e', 'g', 'a', 'b', 'd'];
    this.root = 'e';

    this.state = { 
      diagram: this.chordDiagrams.getDiagram(this.chord.join(' '))
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
          background: 
            `#${this.colorPalette[this.chord.indexOf(note)]}`
        }}>{this.renderNoteLabel(note)}
      </div>) : null;
  }

  renderStrings() {
    return (
      this.state.diagram.map((string, i) => {
        return (
          <div style={{height: `${this.stringSpacing()}%`}} 
            className='string-container' key={i}>

            {[<div className='string' key={`string-${i}`}></div>]
              .concat(
                string.map((note, j) => {
                    return this.renderNote(note, j);
                }))}
          </div>);
      }));
  }

  renderDots() {
    return [3, 5, 7, 9, 15, 17]
      .filter((fret) => fret < this.fretCount)
      .map((fret, i) => {
        return <div className='dot'
          key={i}
          style={{
            left: 
              `${fret * this.fretWidth() - this.fretWidth() / 2}%`,
          }}>
          </div>;
      });
  }

  renderDoubleDots() {
    return <div className='double-dots'>
      {[12, 12]
        .filter((fret) => fret < this.fretCount)
        .map((fret, i) => {
          return <div className='dot'
            key={i}
            style={{
              left: 
                `${fret * this.fretWidth() - this.fretWidth() / 2}%`,
            }}>
            </div>;
        })}
      </div>;
  }

  render() {
    return (
     <div className='chord-diagram'>
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
