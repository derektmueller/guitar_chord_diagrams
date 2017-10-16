import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";
import ChordConfig from "./ChordConfig.jsx";
import ChordDiagrams from '../../lib/ChordDiagrams.js';
import ColorPalette from '../../lib/ColorPalette.js';
import { addChordDiagram } from '../actions/chordDiagrams'
import { connect } from 'react-redux'

class ChordDiagramModel {
  constructor({index, fretCount, notes, tuning, title, root}) {
    Object.assign(this, {
      index,
      chordDiagrams: new ChordDiagrams({
        fretCount: fretCount, notes: notes, tuning
      }),
      title,
      colorPalette: new ColorPalette,
      root
    });
  }
}

export class Index extends React.Component {
  constructor(props) {
    super(props);

//    this.props.addChordDiagram({ 
//        fretCount: 13, 
//        notes: 'e g a b d',
//        title: "e minor pentatonic",
//        root: 'e'
//    });
//    this.props.addChordDiagram({ 
//        fretCount: 13, 
//        notes: 'e g b',
//        title: "e minor (guitar)",
//        root: 'e'
//    });
//    this.props.addChordDiagram({ 
//        fretCount: 13, 
//        notes: 'e g b',
//        title: "e minor (ukulele)",
//        tuning: 'g c e a',
//        root: 'e'
//    });
  }

  renderDiagrams() {
    return this.props.chordDiagrams.map((chordDiagram, i) => {
      return <ChordDiagram 
        {...new ChordDiagramModel(
          Object.assign({index: i}, chordDiagram))}
        key={i}
      />;
    });
  }

  render() {
    return (
      <div id='index'>
        <div className='diagrams'>
          {this.renderDiagrams()}
        </div>
        <ChordConfig />
    </div>);
  }
}

export default connect(
  state => { return { chordDiagrams: state.chordDiagrams }; },
  dispatch => { 
    return { 
      addChordDiagram: (config) => dispatch(addChordDiagram(config))
    }; 
  }
)(Index);