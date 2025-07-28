import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import {
  Config,
  Project,
  SocialLink,
} from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';
import { HighlightService } from '../../core/services/highlight.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  configData!: Config;
  projects: Project[] = [];
  socialLinks: SocialLink[] = [];
  private unsubscribe$ = new Subject<void>();
  currentYear: number = new Date().getFullYear();

  constructor(
    private configService: ConfigService,
    private highlightService: HighlightService
  ) {}

  ngOnInit() {
    this.configService
      .getConfig()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.configData = data;
        this.projects = data.projects;
        this.socialLinks = data.socialLinks;
      });
  }

  getHighlightedDescription(description: string, keywords: string[]): SafeHtml {
    return this.highlightService.highlightKeywords(description, keywords);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
