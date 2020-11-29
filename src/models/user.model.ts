export interface User {
  login?: string;
  name?: string;
  avatar_url?: string;
  html_url?: string;
  bio?: string | null;
  public_repos?: number;
  followers?: number;
}

export interface Users {
  totalCount: number;
  users: User[];
}
