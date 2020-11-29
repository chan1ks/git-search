import React from 'react';

import renderer from 'react-test-renderer';
import Footer from '../__layout/footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer author="chan1ks" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
