import { SearchResponse, Userx } from './search-response.model';
import { User } from './user.model';

export const MOCK_USERSx: Userx[] = [
  {
    login: 'chan1ks',
    id: 9042219,
    node_id: 'MDQ6VXNlcjkwNDIyMTk=',
    avatar_url: 'https://avatars2.githubusercontent.com/u/9042219?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/chan1ks',
    html_url: 'https://github.com/chan1ks',
    followers_url: 'https://api.github.com/users/chan1ks/followers',
    following_url:
      'https://api.github.com/users/chan1ks/following{/other_user}',
    gists_url: 'https://api.github.com/users/chan1ks/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/chan1ks/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/chan1ks/subscriptions',
    organizations_url: 'https://api.github.com/users/chan1ks/orgs',
    repos_url: 'https://api.github.com/users/chan1ks/repos',
    events_url: 'https://api.github.com/users/chan1ks/events{/privacy}',
    received_events_url: 'https://api.github.com/users/chan1ks/received_events',
    type: 'User',
    site_admin: false,
    score: 1.0,
  },
];

export const MOCK_SEARCH_RESPONSE: SearchResponse = {
  total_count: 1,
  incomplete_results: false,
  items: MOCK_USERSx,
};

export const MOCK_USERS: User[] = [
  {
    login: 'can',
    avatar_url: 'https://avatars2.githubusercontent.com/u/357195?v=4',
    html_url: 'https://github.com/can',
    name: 'Can',
    bio: 'Cybersecurity Consultant',
    public_repos: 16,
    followers: 36,
  },
  {
    login: 'candycat1992',
    avatar_url: 'https://avatars3.githubusercontent.com/u/5907064?v=4',
    html_url: 'https://github.com/candycat1992',
    name: 'Feng Lele',
    bio: null,
    public_repos: 12,
    followers: 2280,
  },
  {
    login: 'caniszczyk',
    avatar_url: 'https://avatars1.githubusercontent.com/u/63777?v=4',
    html_url: 'https://github.com/caniszczyk',
    name: 'Chris Aniszczyk',
    bio: 'always paying it forward',
    public_repos: 70,
    followers: 520,
  },
  {
    login: 'cantino',
    avatar_url: 'https://avatars0.githubusercontent.com/u/83835?v=4',
    html_url: 'https://github.com/cantino',
    name: 'Andrew Cantino',
    bio: 'Ruby ◊ JS ◊ Rust ◊ Science ◊ Space ◊ InfoSec ◊ ML ◊ Greentech',
    public_repos: 36,
    followers: 635,
  },
  {
    login: 'burakcan',
    avatar_url: 'https://avatars2.githubusercontent.com/u/3121257?v=4',
    html_url: 'https://github.com/burakcan',
    name: 'Burak Can',
    bio: null,
    public_repos: 49,
    followers: 609,
  },
];
