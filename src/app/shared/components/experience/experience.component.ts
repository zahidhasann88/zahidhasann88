import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceData: ExperienceItem[] = [];
  
  // Icons
  readonly icons = {
    faLocationDot
  };

  constructor() { }

  ngOnInit(): void {
  }
}