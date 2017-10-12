import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";
import ChordDiagrams from '../../lib/ChordDiagrams.js';
import { connect } from 'react-redux'

class ChordDiagramModel {
  constructor({fretCount, notes, tuning, title, colorPalette, root}) {
    Object.assign(this, {
      chordDiagrams: new ChordDiagrams({fretCount, notes, tuning}),
      title,
      colorPalette,
      root
    });
  }
}

export class Index extends React.Component {
  constructor(props) {
    super(props);

    this.colorPalette = {
      e: 'BB453C',
      g: '7D9F13',
      a: 'E7DB84',
      b: 'A2D2E9',
      d: '3EB88D'
    };
    this.state = {
      //diagrams
    };
  }

  render() {
    return (
      <div id='app'>
        <div className='controls'>
          <input className='title' type='text' />
        </div>
        <div className='diagrams'>
        {[
          <ChordDiagram 
            {...new ChordDiagramModel({
              fretCount: 13, 
              notes: 'e g a b d',
              title: "e minor pentatonic",
              colorPalette: this.colorPalette,
              root: 'e'
            })}
            key='1'
          />,
          <ChordDiagram 
            {...new ChordDiagramModel({
              fretCount: 13, 
              notes: 'e g b',
              title: "e minor (guitar)",
              colorPalette: this.colorPalette,
              root: 'e'
            })}
            key='2'
          />,
          <ChordDiagram 
            {...new ChordDiagramModel({
              fretCount: 13, 
              notes: 'e g b',
              title: "e minor (ukulele)",
              colorPalette: this.colorPalette,
              tuning: ['g', 'c', 'e', 'a'],
              root: 'e'
            })}
            key='3'
          />
        ]}
      </div>
    </div>);
  }
}

export default connect(
  () => {},
  () => {}
)(Index);
