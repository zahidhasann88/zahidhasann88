import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { pageLoadAnimation, routeAnimations } from '../../animation/animations';
import { GlobalState } from '../../models/global-state.model';
import { GlobalStateService } from '../../services/global-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  state!: GlobalState;
  private unsubscribe$ = new Subject<void>();

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
