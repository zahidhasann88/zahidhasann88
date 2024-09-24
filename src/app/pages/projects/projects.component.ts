import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';
import { GlobalStateService } from '../../services/global-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GitHubRepo, Project } from '../../models/global-state.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [photoGalleryAnimations, listAnimations],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: readonly Project[] = [];
  repos: ReadonlyArray<GitHubRepo> = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit() {
    this.globalStateService.getProjects()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(projects => {
        this.projects = projects;
      });

      this.globalStateService.getGitHubRepos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(repos => {
        this.repos = repos;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
