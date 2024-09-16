import { Injectable } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Asynchronous Programming in JavaScript',
      date: '2023-09-15',
      author: 'Your Name',
      content: `<p>Asynchronous programming is a crucial concept in JavaScript...</p>`,
      tags: ['JavaScript', 'Asynchronous Programming', 'Web Development'],
    },
    {
      id: 2,
      title: 'The Power of TypeScript',
      date: '2023-08-30',
      author: 'Your Name',
      content: `<p>Discover how TypeScript can improve your JavaScript development experience...</p>`,
      tags: ['TypeScript', 'JavaScript'],
    },
  ];

  // Public method to get the blog posts array
  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Method to get a post by its ID
  getPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }
}
