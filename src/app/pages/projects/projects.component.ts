import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { Project } from '../../core/models/blog.interfaces';
import { ProjectsService } from '../../core/services/projects.service';
import { FONT_AWESOME_ICONS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private readonly projectsService = inject(ProjectsService);
  readonly icons = FONT_AWESOME_ICONS;

  allRepositories$ = this.projectsService.getAllRepositories();
  
  ngOnInit(): void {
    // Component initialization
  }

  openGithub(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openHomepage(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  formatDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(dateString));
  }

  getLanguageColor(language: string | null): string {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572a5',
      'Java': '#b07219',
      'Go': '#00add8',
      'Rust': '#dea584',
      'C++': '#f34b7d',
      'C#': '#239120',
      'PHP': '#4f5d95',
      'Ruby': '#701516',
      'Swift': '#fa7343',
      'Kotlin': '#f18e33',
      'Dart': '#00b4ab',
      'HTML': '#e34c26',
      'CSS': '#1572b6',
      'Shell': '#89e051',
      'Vue': '#4fc08d',
      'React': '#61dafb'
    };
    return colors[language || ''] || '#6b7280';
  }

  trackByRepoId(index: number, repo: Project & { repoType: 'starred' | 'contributed' }): number {
    return repo.id;
  }
}