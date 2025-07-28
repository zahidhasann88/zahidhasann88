import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ConfigService } from '../../../core/services/config.service';
import { SocialLink } from '../../../core/models/config.interfaces';
import { APP_CONSTANTS } from '../../../core/utils/app.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  private readonly configService = inject(ConfigService);

  private readonly destroy$ = new Subject<void>();

  socialLinks: readonly SocialLink[] = [];
  currentYear: number;

  readonly constants = APP_CONSTANTS;

  constructor() {
    this.currentYear = this.configService.getCurrentYear();
  }

  ngOnInit(): void {
    this.initializeFooter();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeFooter(): void {
    this.configService
      .getSocialLinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((links) => {
        this.socialLinks = links;
      });
  }

  onSocialLinkClick(socialLink: SocialLink, event: Event): void {}

  get footerSocialLinks(): readonly SocialLink[] {
    return this.socialLinks.filter((link) => link.name !== 'Email');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
