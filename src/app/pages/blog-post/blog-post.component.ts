import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable, switchMap } from 'rxjs';
import { BlogPost, BlogCategory } from '../../core/models/blog.interfaces';
import { BlogService } from '../../core/services/blog.service';
import { FONT_AWESOME_ICONS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss',
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly blogService = inject(BlogService);
  readonly icons = FONT_AWESOME_ICONS;

  post$: Observable<BlogPost | undefined>;
  categories$: Observable<BlogCategory[]>;
  
  constructor() {
    this.categories$ = this.blogService.getCategories();
    this.post$ = this.route.params.pipe(
      switchMap(params => this.blogService.getBlogPostBySlug(params['slug']))
    );
  }

  ngOnInit(): void {
    // Component initialization
  }

  goBack(): void {
    this.router.navigate(['/blog']);
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

  getCategoryById(categoryId: string, categories: BlogCategory[]): BlogCategory | undefined {
    return categories.find(cat => cat.id === categoryId);
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

  sharePost(post: BlogPost): void {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  }
}