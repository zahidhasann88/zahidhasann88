import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Asynchronous Programming in JavaScript',
      date: '2023-09-15',
      excerpt: 'In this post, we delve into asynchronous programming concepts in JavaScript, including callbacks, promises, and async/await.',
      tags: ['JavaScript', 'Asynchronous Programming', 'Web Development']
    },
    {
      id: 2,
      title: 'The Power of TypeScript',
      date: '2023-08-30',
      excerpt: 'Discover how TypeScript can improve your JavaScript development experience.',
      tags: ['TypeScript', 'JavaScript']
    },
  ];
}
