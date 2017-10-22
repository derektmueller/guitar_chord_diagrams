import React from 'react';
import ChordDiagrams from '../../lib/ChordDiagrams.js';
import { removeChordDiagram } from '../actions/chordDiagrams'
import { connect } from 'react-redux'

export class ChordDiagram extends React.Component {
  fretWidth() {
    return 1 / (this.props.chordDiagrams.fretCount) * 100;
  }

  stringSpacing() {
    return 1 / (this.props.chordDiagrams.tuning.length) * 100;
  }

  renderFrets() {
    return (<div className='frets'>
      {(new Array(this.props.chordDiagrams.fretCount).fill(null)).map(
        (_, i) => {
          return <div className='fret' key={i} 
            style={{width: `${this.fretWidth()}%`}}></div>;
        })}
    </div>);
  }

  renderFretNumbers() {
    return (<div className='fret-numbers'>
      {(new Array(this.props.chordDiagrams.fretCount).fill(null)).map(
        (_, i) => {
          return <div className='fret-number' key={i} 
            style={{width: `${this.fretWidth()}%`}}>{i + 1}</div>;
        })}
    </div>);
  }

  renderNoteLabel(note) {
    return note.split('').map((elem, i) => {
      if(i === 1) {
        switch(elem) {
          case 'b':
            return <sup key={i} className='flat' />;
          case '#':
            return <sup key={i} className='sharp' />;
        }
      } else {
        return <div key={i}>{elem}</div>;
      }
    });
  }

  renderNote(note, i) {
    return note ? 
      (<div 
        className={`note ${this.props.root === note ? ' root' : ''}`}
        key={`node-${i}`} 
        style={{
          left: `${i * this.fretWidth()}%`,
          background: `#${this.props.colorPalette.getColor(note)}`
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

  renderStringLabels() {
    return (<div className='string-labels'>{
      this.props.chordDiagrams.tuning.slice().reverse().map(
        (stringNote, i) => {
          return (
            <div style={{height: `${this.stringSpacing()}%`}} 
              className='string-label' key={i}>
                <div>
                {this.renderNoteLabel(stringNote)}
                </div>
              </div>);
        })}</div>);
  }

  renderStrings() {
    return this.props.chordDiagrams.getDiagram().map(
      this.renderString.bind(this));
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
      .filter((fret) => fret < this.props.chordDiagrams.fretCount)
      .map(this.renderDot.bind(this));
  }

  renderDoubleDots() {
    return <div className='double-dots'>
      {[12, 12]
        .filter((fret) => fret < this.props.chordDiagrams.fretCount)
        .map(this.renderDot.bind(this))}
      </div>;
  }

  renderDeleteButton() {
    return <div 
      className='delete' 
      onClick={() => 
        this.props.removeChordDiagram(this.props.index)
      } 
    />;
  }

  render() {
    return (
     <div className='chord-diagram'>
        <div className='title'>{this.props.title}</div>
        <div className='fretboard'>
          {this.renderStringLabels()}
          {this.renderFretNumbers()}
          {this.renderStrings()}
          {this.renderFrets()}
          {this.renderDots()}
          {this.renderDoubleDots()}
        </div>
        {this.renderDeleteButton()}
     </div>
    )
  }
}

export default connect(
  undefined,
  dispatch => { 
    return { 
      removeChordDiagram: (index) => {
        return dispatch(removeChordDiagram(index));
      }
    }; 
  }
)(ChordDiagram);
