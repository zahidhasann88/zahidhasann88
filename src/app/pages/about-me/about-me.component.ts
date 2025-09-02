import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import { TimelineSection, Config, SocialLink } from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';
import {
  APP_CONSTANTS,
  FONT_AWESOME_ICONS,
} from '../../core/utils/app.constants';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private readonly location = inject(Location);
  private readonly configService = inject(ConfigService);

  private readonly destroy$ = new Subject<void>();

  config!: Config;
  timelineSections!: readonly TimelineSection[];
  isLoaded = false;

  readonly constants = APP_CONSTANTS;
  readonly icons = FONT_AWESOME_ICONS;

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    this.configService
      .getConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe((config) => {
        this.config = config;
        this.timelineSections = config.aboutMe.timelineSections;
        this.isLoaded = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

  onExternalLinkClick(url: string, linkText: string): void {
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  onEmailLinkClick(email: string): void {
    console.log(`Email link clicked: ${email}`);
    window.location.href = email;
  }

  onSocialLinkClick(socialLink: SocialLink): void {
    console.log(`Social link clicked: ${socialLink.name}`);
    window.open(socialLink.url, '_blank', 'noopener,noreferrer');
  }

  isExternalLink(url: string): boolean {
    return url.startsWith('http') || url.startsWith('mailto:');
  }

  getLinkTarget(url: string): string {
    return this.isExternalLink(url) ? '_blank' : '_self';
  }

  getLinkRel(url: string): string {
    return this.isExternalLink(url) && url.startsWith('http')
      ? 'noopener noreferrer'
      : '';
  }

  hasTechTags(section: TimelineSection): boolean {
    return section.items.some(
      (item) => item.techTags && item.techTags.length > 0
    );
  }

  getSectionClass(sectionIndex: number): string {
    const baseClass = 'timeline-section';
    const sectionClasses = [
      'what-i-do',
      'skills-tools',
      'my-journey',
      'beyond-code',
    ];

    return `${baseClass} ${sectionClasses[sectionIndex] || 'default-section'}`;
  }

  getItemClass(sectionIndex: number, itemIndex: number): string {
    const baseClass = 'timeline-item';

    if (sectionIndex === 1) {
      return `${baseClass} skills-item`;
    } else if (sectionIndex === 2) {
      return `${baseClass} journey-item`;
    }

    return baseClass;
  }

  getDateLabelClass(sectionIndex: number): string {
    return sectionIndex === 1 ? 'date-label' : 'interest-label';
  }

  trackSection(index: number, section: TimelineSection): string {
    return section.title || `section-${index}`;
  }

  trackItem(index: number, item: any): string {
    return item.title || `item-${index}`;
  }

  trackTechTag(index: number, tag: string): string {
    return tag;
  }
}