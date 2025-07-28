import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  pageLoadAnimation,
  routeAnimations,
} from '../../utils/animation/animations';
import { GlobalState, Project, SocialLink } from '../../utils/models/global-state.model';
import { GlobalStateService } from '../../utils/services/global-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  state!: GlobalState;
  projects: Project[] = [];
  socialLinks: SocialLink[] = [];
  private unsubscribe$ = new Subject<void>();
  currentYear: number = new Date().getFullYear();

  constructor(
    private globalStateService: GlobalStateService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.globalStateService
      .getState()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => {
        this.state = state;
        this.projects = state.projects;
        this.socialLinks = state.socialLinks;
      });
  }

  highlightKeywords(description: string, keywords: string[] = []): SafeHtml {
    if (!keywords || keywords.length === 0) {
      return this.sanitizer.bypassSecurityTrustHtml(description);
    }

    let highlightedText = description;
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);

    sortedKeywords.forEach((keyword) => {
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedKeyword})\\b`, 'gi');
      highlightedText = highlightedText.replace(
        regex,
        '<span class="keyword-highlight">$1</span>'
      );
    });

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}