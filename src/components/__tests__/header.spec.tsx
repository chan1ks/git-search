import React from 'react';

import renderer from 'react-test-renderer';
import Header from '../__layout/header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header title="This is a title!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
