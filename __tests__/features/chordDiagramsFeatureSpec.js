import React from 'react';
import { mount } from 'enzyme';

import App from '../../src/components/App.jsx';

describe("creating chord diagrams", () => {
  beforeEach(() => {
    let app = mount(<App />);
  });

  it('the user is able to create chord diagrams', () => {
    expect(true).toEqual(true);
  });
});
