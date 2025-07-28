import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, takeUntil } from 'rxjs';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import {
  TimelineSection,
  QuickStat,
  Config,
} from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';

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

  config!: Config;
  personalIntro!: string;
  quickStats!: QuickStat[];
  timelineSections!: TimelineSection[];

  constructor(
    private location: Location,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.configService
      .getConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.config = data;
        this.timelineSections = data.aboutMe.timelineSections;
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
    return this.config?.icons;
  }
}
