import React, { useEffect, useState } from 'react';
import { User } from '../../models/user.model';
import UserListItem from './user-list-item/user-list-item';
import ReactPaginate from 'react-paginate';

interface UsersListProps {
  users?: User[] | null;
  totalCount?: number | null;
  limit?: number | null;
  handleOffset: (offset: number) => void;
}

interface UsersListState {
  readonly pageCount?: number | null;
}

const INITIAL_USERS_LIST_STATE: UsersListState = {
  pageCount: 0,
};

const UsersList = ({
  users,
  totalCount,
  limit,
  handleOffset,
}: UsersListProps) => {
  const [{ pageCount }, setUserListState] = useState(INITIAL_USERS_LIST_STATE);

  useEffect(() => {
    setUserListState({
      pageCount: Math.ceil(totalCount! / limit!),
    });
  }, [JSON.stringify(users)]);

  const handlePageClick = (data: { selected: number }) => {
    const selected = data.selected;
    const nextPage = selected + 1;
    handleOffset(nextPage);
  };

  return (
    <>
      <h2>{totalCount} github users</h2>
      <ul>
        {users?.map((user: User, i: number) => (
          <UserListItem user={user} key={i} />
        ))}
      </ul>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount!}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousClassName={'previous'}
        nextClassName={'next'}
        pageClassName={'page'}
        activeClassName={'active'}
      />
    </>
  );
};

export default UsersList;
