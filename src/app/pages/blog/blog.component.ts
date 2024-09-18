import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { listAnimations, routeAnimations } from '../../animation/animations';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  animations: [routeAnimations, listAnimations]
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Asynchronous Programming in JavaScript',
      date: '2023-09-15',
      excerpt: 'In this post, we delve into asynchronous programming concepts in JavaScript, including callbacks, promises, and async/await.',
      tags: ['JavaScript', 'Asynchronous Programming', 'Web Development'],
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'The Power of TypeScript',
      date: '2023-08-30',
      excerpt: 'Discover how TypeScript can improve your JavaScript development experience.',
      tags: ['TypeScript', 'JavaScript'],
      category: 'Programming Languages'
    },
    {
      id: 3,
      title: 'Angular vs React: A Comprehensive Comparison',
      date: '2023-10-05',
      excerpt: 'We compare two popular front-end frameworks, Angular and React, to help you choose the right one for your project.',
      tags: ['Angular', 'React', 'Front-end Development'],
      category: 'Frameworks'
    },
  ];

  categories: string[] = ['All', ...new Set(this.blogPosts.map(post => post.category))];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  filteredPosts: BlogPost[] = this.blogPosts;

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterPosts();
  }

  filterPosts() {
    this.filteredPosts = this.blogPosts.filter(post => {
      const categoryMatch = this.selectedCategory === 'All' || post.category === this.selectedCategory;
      const searchMatch = post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return categoryMatch && searchMatch;
    });
  }
}
