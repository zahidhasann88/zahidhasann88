import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import {
  pageLoadAnimation,
  routeAnimations,
} from '../../utils/animation/animations';
import { GlobalState } from '../../utils/models/global-state.model';
import { GlobalStateService } from '../../utils/services/global-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  private unsubscribe$ = new Subject<void>();

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faEnvelope = faEnvelope;
  faCode = faCode;
  faArrowUpLong = faArrowRightLong;
  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/zahidhasann88', icon: faGithub },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/zahidhasann',
      icon: faLinkedin,
    },
    { name: 'Twitter', url: 'https://x.com/zahidhasann15', icon: faTwitter },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/12301102/zahid-hasan',
      icon: faStackOverflow,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@jahidhasann67',
      icon: faMedium,
    },
    { name: 'Email', url: 'mailto:zahidhasann67@gmail.com', icon: faEnvelope },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/zahidhasann67/',
      icon: faCode,
    },
  ];

  constructor(private globalStateService: GlobalStateService) {}

  ngOnInit() {
    this.globalStateService
      .getState()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => {
        this.state = state;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}