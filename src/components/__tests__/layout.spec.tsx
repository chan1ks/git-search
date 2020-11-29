import React from 'react';

import renderer from 'react-test-renderer';
import Layout from '../__layout/layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout children={[]} title="This is a title!" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
