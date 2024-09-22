import { Blog, BlogPost} from '../models/global-state.model';

export const BLOGS: ReadonlyArray<Readonly<Blog>> = [
    {
      id: 1,
      title: 'Understanding Asynchronous Programming in JavaScript',
      date: '2023-09-15',
      excerpt:
        'In this post, we delve into asynchronous programming concepts in JavaScript, including callbacks, promises, and async/await.',
      tags: ['JavaScript', 'Asynchronous Programming', 'Web Development'],
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'The Power of TypeScript',
      date: '2023-08-30',
      excerpt:
        'Discover how TypeScript can improve your JavaScript development experience.',
      tags: ['TypeScript', 'JavaScript'],
      category: 'Programming Languages',
    },
  ] as const;
  
  export const BLOG_POSTS: ReadonlyArray<Readonly<BlogPost>> = [
    {
      id: 1,
      title: 'Mastering Angular: Best Practices for Modern Web Development',
      date: '2024-09-12',
      author: 'John Smith',
      readingTime: 7,
      content: `
          <p>Angular is a powerful framework for building dynamic web applications. Here are some of the best practices to follow.</p>
          <h2>Follow Modular Architecture</h2>
          <p>Organizing your application into modules improves scalability and maintainability.</p>
          <h2>Lazy Loading</h2>
          <p>Lazy loading allows you to load modules only when needed, reducing the initial load time.</p>
        `,
      tags: ['Angular', 'Best Practices', 'Web Development'],
    },
    {
      id: 2,
      title: 'A Deep Dive into TypeScript for JavaScript Developers',
      date: '2024-08-22',
      author: 'Jane Doe',
      readingTime: 5,
      content: `
            <p>TypeScript enhances JavaScript by providing static types. Here’s how TypeScript can help JavaScript developers.</p>
            <h2>Types and Interfaces</h2>
            <p>Adding types and interfaces to your code makes it easier to maintain and reduces bugs.</p>
            <h2>Advanced Type Features</h2>
            <p>TypeScript comes with advanced features such as union types, intersection types, and type inference.</p>
          `,
      tags: ['TypeScript', 'JavaScript', 'Programming Languages'],
    },
  ] as const;
  