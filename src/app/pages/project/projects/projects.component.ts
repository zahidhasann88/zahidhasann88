import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  listAnimations,
  routeAnimations,
} from '../../../utils/animation/animations';
import { Project } from '../../../utils/models/global-state.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [routeAnimations, listAnimations],
})
export class ProjectsComponent implements OnInit {
  projectsDescription: string =
    'These projects represent pivotal moments in my learning journey, each inspired by a personal need or curiosity. They embody my commitment to exploring new technologies and my passion for continuous improvement and innovation.';
  loading = true;
  projects: Project[] = [];
  filteredPosts: Project[] = [];
  categories: string[] = ['All'];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  currentPage: number = 1;
  postsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>('assets/data/projects.json').subscribe({
      next: (data) => {
        this.projects = data;
        this.filteredPosts = [...data];

        const uniqueCategories = data
          .map((project) => project.category?.trim())
          .filter((category) => category && category.length > 0)
          .filter((category, index, arr) => arr.indexOf(category) === index);

        this.categories = ['All', ...uniqueCategories];
        console.log('Available categories:', this.categories);

        this.filterPosts();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.handleFallbackData();
        this.loading = false;
      },
    });
  }

  selectCategory(category: string) {
    console.log('Selected category:', category);
    this.selectedCategory = category;
    this.currentPage = 1;
    this.filterPosts();
  }

  filterPosts() {
    console.log(
      'Filtering with category:',
      this.selectedCategory,
      'Search term:',
      this.searchTerm
    );

    this.filteredPosts = this.projects.filter((project) => {
      const projectCategory = project.category?.trim();
      const selectedCategory = this.selectedCategory?.trim();

      const categoryMatch =
        selectedCategory === 'All' || projectCategory === selectedCategory;

      const searchMatch =
        this.searchTerm === '' ||
        project.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.shortDescription
          ?.toLowerCase()
          .includes(this.searchTerm.toLowerCase()) ||
        project.tags?.some((tag) =>
          tag?.toLowerCase().includes(this.searchTerm.toLowerCase())
        );

      return categoryMatch && searchMatch;
    });

    console.log('Filtered projects count:', this.filteredPosts.length);
    this.totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.currentPage = 1;
    this.filterPosts();
  }

  get paginatedPosts(): Project[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.postsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  private handleFallbackData() {
    this.projects = [];
    this.filteredPosts = [];
    this.categories = ['All'];
  }
}
