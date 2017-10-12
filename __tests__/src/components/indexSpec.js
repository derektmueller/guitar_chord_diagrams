import React from 'react';
import renderer from 'react-test-renderer';

import { Index } from '../../../src/components/Index.jsx';

describe("creating chord diagrams", () => {
  it('renders correctly', () => {
    let index = renderer.create(<Index />);
    expect(index.toJSON()).toMatchSnapshot();
  });
});
