import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";
import ChordConfig from "./ChordConfig.jsx";
import ChordDiagrams from '../../lib/ChordDiagrams.js';
import { addChordDiagram } from '../actions/chordDiagrams'
import { connect } from 'react-redux'

class ChordDiagramModel {
  constructor({fretCount, notes, tuning, title, root}) {
    let colorPalette = {
      e: 'BB453C',
      g: '7D9F13',
      a: 'E7DB84',
      b: 'A2D2E9',
      d: '3EB88D'
    };
    Object.assign(this, {
      chordDiagrams: new ChordDiagrams({
        fretCount: parseInt(fretCount, 10), notes, tuning
      }),
      title,
      colorPalette,
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
        {...new ChordDiagramModel(chordDiagram)}
        key={i}
      />;
    });
  }

  render() {
    return (
      <div id='app'>
        <ChordConfig />
        <div className='diagrams'>
        {this.renderDiagrams()}
      </div>
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
