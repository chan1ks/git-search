import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { SearchResponse, Userx } from '../models/search-response.model';
import { UserDetailsResponse } from '../models/user-details-response.model';
import { User, Users } from '../models/user.model';

const reqDefaults: AxiosRequestConfig = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
};

const BASE_API_URL = 'https://api.github.com';

// Search
const SEARCH_URL = `${BASE_API_URL}/search/users`;

// User Details
const USER_URL = (username: string) => `${BASE_API_URL}/users/${username}`;

interface SearchConfig {
  query: string;
  limit?: number;
  offset?: number;
}

export const getSearchResults = async ({
  query,
  limit = 15,
  offset = 1,
}: SearchConfig): Promise<SearchResponse> =>
  await axios
    .get(SEARCH_URL, {
      ...reqDefaults,
      params: { q: query, per_page: limit, page: offset },
    })
    .then((res: AxiosResponse<SearchResponse>) => res.data);

export const getOtherUserDetails = async (
  username: string
): Promise<UserDetailsResponse> =>
  await axios
    .get(USER_URL(username), reqDefaults)
    .then((res: AxiosResponse<UserDetailsResponse>) => res.data);

export const getUsersDetails = (usernames: string[]): Promise<User>[] =>
  usernames.map(
    async (username: string) =>
      await getOtherUserDetails(username).then(
        ({
          login,
          name,
          avatar_url,
          html_url,
          bio,
          public_repos,
          followers,
        }: UserDetailsResponse) =>
          ({
            login,
            name,
            avatar_url,
            html_url,
            bio,
            public_repos,
            followers,
          } as User)
      )
  );

export const getUsersList = async ({
  query,
  limit,
  offset,
}: SearchConfig): Promise<Users> => {
  const { items, total_count }: SearchResponse = await getSearchResults({
    query,
    limit,
    offset,
  });
  const usernames: string[] = items.map(({ login }: Userx) => login);
  return await Promise.all(getUsersDetails(usernames)).then(
    (usersList: User[]) => ({
      totalCount: total_count,
      users: usersList,
    })
  );
};
