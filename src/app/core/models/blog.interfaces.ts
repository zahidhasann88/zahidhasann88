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