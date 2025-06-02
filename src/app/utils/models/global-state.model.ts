import { SafeHtml } from '@angular/platform-browser';

export interface GlobalState {
  cvLink: string;
  aboutMe: {
    part1: string;
    part2: string;
    part3: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  date: Date;
  excerpt: string;
  tags: string[];
  category: string;
  readingTime: number;
}

export interface BlogPost {
  id: string;
  title: string;
  date: Date;
  author: string;
  content: string;
  tags: string[];
  readingTime: number;
  excerpt: string;
  category: string;
}
export interface SafeBlogPost extends Omit<BlogPost, 'content'> {
  content: SafeHtml;
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  technologies: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  features?: string[];
  challenges?: {
    title: string;
    description: string;
    solution?: string;
  }[];
  screenshots?: {
    url: string;
    caption?: string;
  }[];
  developmentProcess?: string;
  futurePlans?: string;
  category: string;
  tags: string[];
}
