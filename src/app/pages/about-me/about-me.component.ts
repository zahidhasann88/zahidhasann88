import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import {
  listAnimations,
  routeAnimations,
} from '../../utils/animation/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [routeAnimations, listAnimations],
})
export class AboutMeComponent implements OnInit {
  faCalendar = faCalendarDays;

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}