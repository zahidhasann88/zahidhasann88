import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  listAnimations,
  routeAnimations,
} from '../../utils/animation/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [routeAnimations, listAnimations],
})
export class AboutMeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}