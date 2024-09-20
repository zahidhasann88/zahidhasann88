import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';
import { GlobalStateService } from '../../services/global-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Project } from '../../models/global-state.model';

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
  private unsubscribe$ = new Subject<void>();

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit() {
    this.globalStateService.getProjects()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(projects => {
        this.projects = projects;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
