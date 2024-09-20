import { SafeHtml } from '@angular/platform-browser';

export interface GlobalState {
  cvLink: string;
  aboutMe: {
    part1: string;
    part2: string;
    part3: string;
  };
}
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  imageWidth: number;
  imageHeight: number;
}
export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: string;
}
export interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
  readingTime: number;
}
export interface SafeBlogPost extends Omit<BlogPost, 'content'> {
  content: SafeHtml;
}
