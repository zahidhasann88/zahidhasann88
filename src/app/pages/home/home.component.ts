import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import {
  Config,
  HomeComponentState,
  Project,
  SocialLink,
} from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';
import { HighlightService } from '../../core/services/highlight.service';
import { APP_CONSTANTS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly configService = inject(ConfigService);
  private readonly highlightService = inject(HighlightService);

  private readonly destroy$ = new Subject<void>();

  componentState!: HomeComponentState;

  readonly constants = APP_CONSTANTS;

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    combineLatest({
      config: this.configService.getConfig(),
      projects: this.configService.getProjects(),
      socialLinks: this.configService.getSocialLinks(),
    })
      .pipe(
        map(({ config, projects, socialLinks }) => ({
          config,
          projects,
          socialLinks,
          currentYear: this.configService.getCurrentYear(),
        })),
        takeUntil(this.destroy$)
      )
      .subscribe((state) => {
        this.componentState = state;
      });
  }

  getHighlightedDescription(
    description: string,
    keywords: readonly string[]
  ): SafeHtml {
    return this.highlightService.highlightKeywords(description, keywords);
  }

  getHighlightedText(text: string): SafeHtml {
    return this.highlightService.highlightNumbers(text);
  }

  onCvLinkClick(): void {
    window.open(this.componentState.config.cvLink, '_blank');
  }

  onContactClick(): void {
    window.location.href = `mailto:${this.constants.PROFILE.EMAIL}`;
  }

  onSocialLinkClick(socialLink: SocialLink): void {
    window.open(socialLink.url, '_blank');
  }

  onProjectLinkClick(project: Project): void {
    window.open(project.url, '_blank');
  }

  get buttonLabels() {
    return this.constants.BUTTONS;
  }

  get sectionTitles() {
    return this.constants.SECTION_TITLES;
  }

  get profile() {
    return this.componentState?.config?.profile;
  }

  get aboutMe() {
    return this.componentState?.config?.aboutMe;
  }

  get icons() {
    return this.componentState?.config?.icons;
  }

  get isLoaded(): boolean {
    return !!this.componentState;
  }
}
