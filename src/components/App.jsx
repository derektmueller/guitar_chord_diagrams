import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";

export default class App extends React.Component {
  render() {
    return ([
      <ChordDiagram 
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
        chord={['e', 'g', 'a', 'b', 'd']}
        root='e'
      />,
      <ChordDiagram 
        key='2'
        title="e major"
        colorPalette={
          {
            e: 'BB453C',
            'g#': '7D9F13',
            b: 'A2D2E9'
          }
        }
        chord={['e', 'g#', 'b']}
        root='e'
      />,
      <ChordDiagram 
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
        chord={['e', 'g#', 'b']}
        root='e'
      />
    ]);
  }
}
