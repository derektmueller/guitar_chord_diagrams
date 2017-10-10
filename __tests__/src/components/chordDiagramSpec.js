import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../src/components/App.jsx';

describe("creating chord diagrams", () => {
  it('renders correctly', () => {
    let app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
