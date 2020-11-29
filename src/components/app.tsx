import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import SearchBox from './form/search-box';
import { getUsersList } from '../services/search.service';
import Layout from './__layout/layout';
import UsersList from './users-list/users-list';
import { User, Users } from '../models/user.model';

interface AppState {
  readonly searchResults: User[] | null;
  readonly totalCount: number | null;
  readonly limit: number | null;
  readonly offset: number | null;
  readonly searchTerm: string | null;
  readonly searching: boolean | null;
  readonly error: any | null;
}

const INITIAL_APP_STATE: AppState = {
  searchResults: null,
  totalCount: 0,
  limit: 10,
  offset: 0,
  searchTerm: null,
  searching: false,
  error: null,
};

const getUsers = async (
  appState: AppState,
  setAppState: Dispatch<SetStateAction<AppState>>
) => {
  try {
    const { searchTerm, limit, offset } = appState;
    const { totalCount, users }: Users = await getUsersList({
      query: searchTerm!,
      limit: limit!,
      offset: offset!,
    });
    if (users.length) {
      setAppState({
        ...appState,
        totalCount,
        searchResults: users,
        searching: false,
      });
    }
  } catch (err) {
    const error = err.response.data;
    setAppState({ ...appState, error, searching: false });
  }
};

const App = () => {
  const [appState, setAppState] = useState<AppState>(INITIAL_APP_STATE);
  const {
    searchResults,
    totalCount,
    limit,
    offset,
    error,
    searching,
  } = appState;
  console.log(appState);

  useEffect(() => {
    handleCallback();
  }, [offset]);

  const handleCallback = () => {
    const { searchTerm } = appState;
    if (searchTerm) {
      getUsers(appState, setAppState);
    }
  };

  const handleChange = (searchTerm: string) => {
    setAppState({ ...appState, searchTerm });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCallback();
  };

  const handleOffset = (offset: number) => {
    setAppState({ ...appState, offset });
  };

  return (
    <Layout title="git.me">
      <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />
      {error ? (
        <div className="center">Sorry! {error.message}</div>
      ) : searching ? (
        <div className="center">Digging for treasure...</div>
      ) : searchResults ? (
        <UsersList
          users={searchResults}
          totalCount={totalCount}
          limit={limit}
          handleOffset={handleOffset}
        />
      ) : null}
    </Layout>
  );
};

export default App;
