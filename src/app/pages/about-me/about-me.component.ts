import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faBrain,
  faCalendar,
  faHeart,
  faLightbulb,
  faCoffee,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
  faArrowLeft = faArrowLeft;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faBrain = faBrain;
  faCalendar = faCalendar;
  faHeart = faHeart;
  faLightbulb = faLightbulb;
  faCoffee = faCoffee;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}