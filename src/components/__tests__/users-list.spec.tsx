import React from 'react';

import renderer from 'react-test-renderer';
import { MOCK_USERS } from '../../models/mock_user';
import UsersList from '../users-list/users-list';

describe('UsersList', () => {
  it('renders correctly', () => {
    const mockedHandleOffsetFn = jest.fn((event) => {
      console.log('Mocked handle offset function');
    });
    const props = {
      users: MOCK_USERS,
      totalCount: MOCK_USERS.length,
      limit: 10,
      handleOffset: mockedHandleOffsetFn,
    };
    const tree = renderer.create(<UsersList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
