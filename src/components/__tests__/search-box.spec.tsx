import React from 'react';

import renderer from 'react-test-renderer';
import SearchBox from '../form/search-box';

describe('SearchBox', () => {
  it('renders correctly', () => {
    const mockedChangeFn = jest.fn((event) => {
      console.log('Mocked change function');
    });

    const mockedSubmitFn = jest.fn((event) => {
      console.log('Mocked submit function');
    });

    const tree = renderer
      .create(
        <SearchBox
          handleChange={mockedChangeFn}
          handleSubmit={mockedSubmitFn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
