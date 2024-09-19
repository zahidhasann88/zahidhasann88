import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
  readingTime: number;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  safeContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.getPost(id);
    if (this.post) {
      this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    }
  }


getPost(id: number): BlogPost | undefined {
  const blogPosts: BlogPost[] = [
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
      tags: ['Angular', 'Best Practices', 'Web Development']
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
      tags: ['TypeScript', 'JavaScript', 'Programming Languages']
    },
    {
      id: 3,
      title: 'The Future of JavaScript: Emerging Trends and Technologies',
      date: '2024-07-15',
      author: 'Sam Johnson',
      readingTime: 6,
      content: `
        <p>JavaScript is constantly evolving. Let’s look at some of the trends that will shape the future of JavaScript.</p>
        <h2>WebAssembly</h2>
        <p>WebAssembly allows running high-performance code alongside JavaScript.</p>
        <h2>Server-side Rendering</h2>
        <p>With server-side rendering, JavaScript frameworks like Next.js can boost performance and SEO.</p>
      `,
      tags: ['JavaScript', 'Web Development', 'Trends']
    }
  ];

  return blogPosts.find(post => post.id === id);
}

share(platform: string) {
  const url = window.location.href;
  let shareUrl = '';

  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(this.post?.title || '')}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(this.post?.title || '')}`;
      break;
  }

  window.open(shareUrl, '_blank');
}

getPreviousPostId(): number | null {
  return this.post && this.post.id > 1 ? this.post.id - 1 : null;
}

getNextPostId(): number | null {
  const maxId = 3; // Assuming we have 3 posts, adjust as needed
  return this.post && this.post.id < maxId ? this.post.id + 1 : null;
}
}