import React from 'react';
import ChordDiagram from "./ChordDiagram.jsx";

export default class App extends React.Component {
  render() {
    return ([
     <ChordDiagram 
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
      colorPalette={
        {
          e: 'BB453C',
          g: '7D9F13',
          b: 'A2D2E9'
        }
      }
      chord={['e', 'g', 'b']}
      root='e'
     />
    ]);
  }
}
