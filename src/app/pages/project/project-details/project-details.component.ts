import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project } from '../../../utils/models/global-state.model';
import { CommonModule } from '@angular/common';
import { pageLoadAnimation, routeAnimations } from '../../../utils/animation/animations';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  animations: [routeAnimations, pageLoadAnimation]
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;
  loading = true;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      
      if (projectId) {
        this.loadProjectDetails(projectId);
      } else {
        this.loading = false;
        this.router.navigate(['/projects']);
      }
    });
  }

  loadProjectDetails(id: string) {
    this.loading = true;
    
    // Load projects data from assets folder
    this.http.get<Project[]>('assets/data/projects.json')
      .subscribe({
        next: (projects) => {
          const project = projects.find(p => p.id === id);
          
          if (project) {
            this.project = project;
          } else {
            // Project not found, you could redirect
            this.router.navigate(['/projects']);
          }
          
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading project details:', err);
          this.loading = false;
        }
      });
  }
}
