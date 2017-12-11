import React from 'react';
import renderer from 'react-test-renderer';
import { Editor } from '../../../src/components/Editor';

jest.mock('../../../src/components/DiagramForm');
jest.mock('../../../src/components/DiagramConfig');
jest.mock('react-redux', () => { 
  return require('../../helpers/reactReduxMock');
});

describe("creating chord diagrams", () => {
  it('renders correctly', () => {
    let index = renderer.create(<Editor 
      addChordDiagram={() => {}}
      chordDiagrams={[
        { 
          fretCount: 13, 
          notes: 'e g a b d',
          title: "e minor pentatonic",
          root: 'e'
        },
        { 
          fretCount: 13, 
          notes: 'e g# b',
          title: "e (guitar)",
          root: 'e'
        },
        { 
          fretCount: 13, 
          notes: 'e g b',
          title: "e minor (ukulele)",
          tuning: 'g c e a',
          root: 'e'
        }
      ]}
    />);
    expect(index.toJSON()).toMatchSnapshot();
  });
});
