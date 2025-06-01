import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listAnimations, photoGalleryAnimations } from '../../utils/animation/animations';
import { Project } from '../../utils/models/global-state.model';
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
    this.http.get<Project[]>('assets/data/projects.json')
      .subscribe({
        next: (data) => {
          this.projects = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading projects:', err);
          this.handleFallbackData();
          this.loading = false;
        }
      });
  }

  private handleFallbackData() {
    console.log('Using fallback project data');
  }
}
