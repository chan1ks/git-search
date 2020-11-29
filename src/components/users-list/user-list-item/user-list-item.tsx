import React from 'react';
import { User } from '../../../models/user.model';

interface UserListItemProps {
  user: User;
  index?: number;
}

const UserListItem = ({ index, user }: UserListItemProps) => (
  <li className="list-item" key={index}>
    <a className="list-item-link" href={user?.html_url}>
      <img
        className="list-item-avatar"
        src={user?.avatar_url}
        alt={user?.login}
      />
      <div className="list-item-body">
        <div className="user-details">
          <p className="user-call-card">
            <span className="bold">{user?.name}</span>{' '}
            <span>{user?.login}</span>
          </p>
          <p>{user?.bio}</p>
          <div className="flex row">
            <span className="light">Respos: {user?.public_repos}</span>
            <span className="light">Followers: {user?.followers}</span>
          </div>
        </div>
        <span className="chevron right"></span>
      </div>
    </a>
  </li>
);

export default UserListItem;
