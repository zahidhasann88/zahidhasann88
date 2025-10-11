import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { BlogPost, BlogCategory } from '../../core/models/blog.interfaces';
import { BlogService } from '../../core/services/blog.service';
import { FONT_AWESOME_ICONS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);
  readonly icons = FONT_AWESOME_ICONS;
  
  blogPosts$: Observable<BlogPost[]>;
  categories$: Observable<BlogCategory[]>;
  featuredPosts$: Observable<BlogPost[]>;
  
  allPosts: BlogPost[] = [];

  constructor() {
    this.blogPosts$ = this.blogService.getBlogPosts();
    this.categories$ = this.blogService.getCategories();
    this.featuredPosts$ = this.blogService.getFeaturedPosts();
  }

  ngOnInit(): void {
    this.blogPosts$.subscribe(posts => {
      this.allPosts = posts;
    });
  }

  navigateToPost(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }

  getCategoryIcon(categoryId: string): any {
    switch (categoryId) {
      case 'web-development':
        return this.icons.SOLID.CODE;
      case 'programming-languages':
        return this.icons.SOLID.BOOK_OPEN;
      case 'career-development':
        return this.icons.SOLID.GRADUATION_CAP;
      case 'tutorials':
        return this.icons.SOLID.LIGHTBULB;
      case 'resources':
        return this.icons.SOLID.TROPHY;
      default:
        return this.icons.SOLID.BOOK_OPEN;
    }
  }
}