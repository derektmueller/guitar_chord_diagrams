import "babel-polyfill";
import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/components/App.jsx';

describe("creating chord diagrams", () => {
  let app;

  function mockPushState() {
    history.replaceState = () => {};
  }

  beforeEach(() => {
    mockPushState();
    app = mount(<App />);
  });

  function addChordDiagram(config) {
    app.find('input[name="title"]').simulate(
      'change', { target: { value: config.title }});
    app.find('input[name="notes"]').simulate(
      'change', { target: { value: config.notes }});
    app.find('input[name="root"]').simulate(
      'change', { target: { value: config.root }});
    app.find('input[name="fretCount"]').simulate(
      'change', { target: { value: config.fretCount }});
    app.find('input[name="tuning"]').simulate(
      'change', { target: { value: config.tuning }});
    app.find('.config button[type="submit"]').simulate('submit');
  }

  function addChordDiagramViaTextareaConfig(config) {
    app.find('textarea').simulate(
      'change', { target: { value: config }});
    app.find('.diagram-config button[type="submit"]').
      simulate('click');
  }

  function deleteChordDiagram() {
    app.find('.chord-diagram .delete').first().simulate('click');
  }

  it('the user is able to create chord diagrams', () => {
    expect(app.find('textarea').text()).toMatch('[]');

    addChordDiagram({
      title: 'e minor pentatonic',
      notes: 'e g a b d',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor pentatonic');
    expect(app.find('textarea').text()).toMatch(
      "[{\"title\":\"e minor pentatonic\",\"notes\":\"e g a b d\",\"root\":\"e\",\"fretCount\":13}]"
    );

    addChordDiagramViaTextareaConfig(
      JSON.stringify(
        [
          {"title":"e minor pentatonic","notes":"e g a b d","root":"e","fretCount":13},
          {"title":"e minor (guitar)","notes":"e g b","root":"e","fretCount":13}
        ]
      )
    );

    expect(app.text()).toMatch('e minor (guitar)');

    addChordDiagram({
      title: 'e minor (ukulele)',
      notes: 'e g b',
      root: 'e',
      tuning: 'g c e a',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor (ukulele)');

    addChordDiagram({
      title: 'e minor, position 1 (guitar)',
      notes: '0/2/2/0/0/0',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch('e minor, position 1 (guitar)');

    addChordDiagram({
      title: 'a minor pentatonic, position 1 (guitar)',
      notes: '5 8/5 7/5 7/5 7/5 8/5 8',
      root: 'e',
      fretCount: 13
    });

    expect(app.text()).toMatch(
      'a minor pentatonic, position 1 (guitar)');

    deleteChordDiagram();

    expect(app.text()).not.toMatch('e minor pentatonic');

    deleteChordDiagram();

    expect(app.text()).not.toMatch('e minor (guitar)');

    deleteChordDiagram();

    expect(app.text()).not.toMatch('e minor (ukulele)');

    deleteChordDiagram();

    expect(app.text()).not.toMatch('e minor, position 1 (guitar)');

    deleteChordDiagram();

    expect(app.text()).not.toMatch(
      'a minor pentatonic, position 1 (guitar)');
  });
});
