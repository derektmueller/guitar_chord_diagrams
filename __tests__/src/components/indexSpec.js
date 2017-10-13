import React from 'react';
import renderer from 'react-test-renderer';

import { Index } from '../../../src/components/Index.jsx';

describe("creating chord diagrams", () => {
  it('renders correctly', () => {
    let index = renderer.create(<Index 
      addChordDiagram={() => {}}
      chordDiagrams={[
        { 
          fretCount: 13, 
          notes: 'e g a b d',
          title: "e minor pentatonic",
          colorPalette: {
            e: 'BB453C',
            g: '7D9F13',
            a: 'E7DB84',
            b: 'A2D2E9',
            d: '3EB88D'
          },
          root: 'e'
        },
        { 
          fretCount: 13, 
          notes: 'e g b',
          title: "e minor (guitar)",
          colorPalette: {
            e: 'BB453C',
            g: '7D9F13',
            a: 'E7DB84',
            b: 'A2D2E9',
            d: '3EB88D'
          },
          root: 'e'
        },
        { 
          fretCount: 13, 
          notes: 'e g b',
          title: "e minor (ukulele)",
          colorPalette: {
            e: 'BB453C',
            g: '7D9F13',
            a: 'E7DB84',
            b: 'A2D2E9',
            d: '3EB88D'
          },
          tuning: ['g', 'c', 'e', 'a'],
          root: 'e'
        }
      ]}
    />);
    expect(index.toJSON()).toMatchSnapshot();
  });
});
