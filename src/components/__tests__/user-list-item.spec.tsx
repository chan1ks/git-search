import React from 'react';

import renderer from 'react-test-renderer';
import { MOCK_USERS } from '../../models/mock_user';
import UserListItem from '../users-list/user-list-item/user-list-item';

describe('UserListItem', () => {
  it('renders correctly', () => {
    const user = MOCK_USERS[0];
    const tree = renderer
      .create(<UserListItem index={0} user={user} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
