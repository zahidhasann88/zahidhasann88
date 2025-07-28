import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigService } from '../../../core/services/config.service';
import { SocialLink } from '../../../core/models/config.interfaces';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear: number = new Date().getFullYear();

  socialLinks: SocialLink[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService
      .getConfig()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.socialLinks = data.socialLinks;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
