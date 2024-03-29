export interface Qiita {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: null;
}

export interface Tag {
  name: string;
  versions: any[];
}

export interface User {
  description: null | string;
  facebook_id: null | string;
  followees_count: number;
  followers_count: number;
  github_login_name: null | string;
  id: string;
  items_count: number;
  linkedin_id: null | string;
  location: null | string;
  name: string;
  organization: string | null;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: null | string;
  website_url: null | string;
}
