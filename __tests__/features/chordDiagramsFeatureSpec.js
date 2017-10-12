import React from 'react';
import { mount } from 'enzyme';

import { Index } from '../../src/components/Index.jsx';

describe("creating chord diagrams", () => {
  let app;
  beforeEach(() => {
    app = mount(<Index />);
  });

  function addChordDiagram() {
    app.find('.controls .title').simulate('change');
  }

  function deleteChordDiagram() {
  }

  it('the user is able to create chord diagrams', () => {
    expect(true).toEqual(true);

    addChordDiagram({
      title: 'e minor pentatonic',
      notes: 'e g a b d',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor pentatonic');

    addChordDiagram({
      title: 'e minor (guitar)',
      notes: 'e g b',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor (guitar)');

    addChordDiagram({
      title: 'e minor (ukulele)',
      notes: 'e g b',
      root: 'e',
      tuning: ['g', 'c', 'e', 'a'],
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor (ukulele)');

    deleteChordDiagram('e minor pentatonic');

    expect(app.text()).not.toMatch('e minor pentatonic');

    deleteChordDiagram('e minor');

    expect(app.text()).not.toMatch('e minor (guitar)');

    deleteChordDiagram('e minor');

    expect(app.text()).not.toMatch('e minor (ukulele)');
  });
});
