export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: Date;
  updatedDate?: Date;
  tags: string[];
  category: string;
  readTime: number; // in minutes
  featured: boolean;
  coverImage?: string;
  metaDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface LearningResource {
  id: number;
  title: string;
  description: string;
  url: string;
  category: 'nodejs' | 'go' | 'angular' | 'react' | 'python' | 'javascript' | 'typescript' | 'other';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'documentation' | 'tutorial' | 'course' | 'practice' | 'tool' | 'book';
  featured?: boolean;
  tags: string[];
}

export interface Project {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  private: boolean;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface ProjectContribution {
  type: 'feature' | 'bug-fix' | 'documentation' | 'refactor' | 'other';
  description: string;
  pullRequestUrl?: string;
  issueUrl?: string;
  date: Date;
}