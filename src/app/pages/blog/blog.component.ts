import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { listAnimations, routeAnimations } from '../../utils/animation/animations';
import { Blog } from '../../utils/models/global-state.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  animations: [routeAnimations, listAnimations]
})
export class BlogComponent {
  blogs: Blog[] = [];
  filteredPosts: Blog[] = [];
  categories: string[] = ['All'];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  currentPage: number = 1;
  postsPerPage: number = 10;
  totalPages: number = 1;
  private unsubscribe$ = new Subject<void>();
  blogDescription: string = 'A collection of thoughts, discoveries, and lessons learned along my journey as a developer. These posts capture the moments of curiosity that drive me to explore new ideas and share what I\'ve discovered.';

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit() {
    this.globalStateService.getBlogs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(blogs => {
        this.blogs = [...blogs];
        this.categories = ['All', ...new Set(blogs.map(post => post.category))];
        this.filterPosts();
      });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.filterPosts();
  }

  filterPosts() {
    this.filteredPosts = this.blogs.filter(post => {
      const categoryMatch = this.selectedCategory === 'All' || post.category === this.selectedCategory;
      const searchMatch = post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return categoryMatch && searchMatch;
    });
    this.totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  get paginatedPosts(): Blog[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
