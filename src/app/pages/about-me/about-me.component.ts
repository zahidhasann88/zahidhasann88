import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, takeUntil } from 'rxjs';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../utils/animation/animations';
import {
  TimelineSection,
  QuickStat,
  GlobalState,
} from '../../utils/models/global-state.model';
import { GlobalStateService } from '../../utils/services/global-state.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [routeAnimations, pageLoadAnimation],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  faArrowLeft = faArrowLeft;

  globalState!: GlobalState;
  personalIntro!: string;
  quickStats!: QuickStat[];
  timelineSections!: TimelineSection[];

  constructor(
    private location: Location,
    private globalStateService: GlobalStateService
  ) {}

  ngOnInit(): void {
    this.globalStateService
      .getState()
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.globalState = state;
        this.timelineSections = state.aboutMe.timelineSections;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBack(): void {
    this.location.back();
  }

  get icons() {
    return this.globalState?.icons;
  }
}
