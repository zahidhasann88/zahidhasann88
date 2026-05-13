import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocationDot, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export interface ExperienceRole {
  position: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  location: string;
  position?: string;
  description?: string;
  achievements?: string[];
  roles?: ExperienceRole[];
  expanded?: boolean;
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
    faLocationDot,
    faChevronDown,
    faChevronUp
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize all items as collapsed
    this.experienceData = this.experienceData.map(item => ({
      ...item,
      expanded: false
    }));
  }

  toggleExpand(index: number): void {
    this.experienceData[index].expanded = !this.experienceData[index].expanded;
  }
}