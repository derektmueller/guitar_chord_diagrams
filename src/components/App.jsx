import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";
import ChordDiagrams from '../../lib/ChordDiagrams.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //diagrams
    };
  }

  render() {
    return (
      <div id='app'>{[
        <ChordDiagram 
          diagram={
            new ChordDiagrams({
                fretCount: 13, 
                notes: 'e g a b d'
              })
          }
          key='1'
          title="e minor pentatonic"
          colorPalette={
            {
              e: 'BB453C',
              g: '7D9F13',
              a: 'E7DB84',
              b: 'A2D2E9',
              d: '3EB88D'
            }
          }
          root='e'
        />,
        <ChordDiagram 
          diagram={
            new ChordDiagrams({
                fretCount: 13, 
                notes: 'e g# b',
              })
          }
          key='2'
          title="e major"
          colorPalette={
            {
              e: 'BB453C',
              'g#': '7D9F13',
              b: 'A2D2E9'
            }
          }
          root='e'
        />,
        <ChordDiagram 
          diagram={
            new ChordDiagrams({
                fretCount: 13, 
                notes: 'e g# b',
                tuning: ['g', 'c', 'e', 'a']
              })
          }
          key='3'
          title="e major"
          tuning={['g', 'c', 'e', 'a']}
          colorPalette={
            {
              e: 'BB453C',
              'g#': '7D9F13',
              b: 'A2D2E9'
            }
          }
          root='e'
        />
      ]}
    </div>);
  }
}
