import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';
import { Project } from '../../models/global-state.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [photoGalleryAnimations, listAnimations],
})
export class ProjectsComponent implements OnInit {
  projectsDescription: string = 'These projects represent pivotal moments in my learning journey, each inspired by a personal need or curiosity. They embody my commitment to exploring new technologies and my passion for continuous improvement and innovation.';
  loading = true;
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Load projects data from assets folder
    this.http.get<Project[]>('assets/data/projects.json')
      .subscribe({
        next: (data) => {
          this.projects = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading projects:', err);
          // If the data doesn't load, we can use the data from your paste.txt file
          // This is for development purposes and should be removed in production
          this.handleFallbackData();
          this.loading = false;
        }
      });
  }

  // Fallback method to handle data loading errors during development
  private handleFallbackData() {
    // This is just a temporary solution for development
    // In production, you should ensure your data file exists at the correct path
    console.log('Using fallback project data');
    // You could add your JSON data directly here if needed
  }
}
