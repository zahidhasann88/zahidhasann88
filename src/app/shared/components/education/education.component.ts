import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() educationData: EducationItem[] = [];
  
  // Icons
  readonly icons = {
    faChevronDown,
    faChevronUp
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize all items as collapsed
    this.educationData.forEach(item => item.expanded = false);
  }

  toggleExpand(index: number): void {
    this.educationData[index].expanded = !this.educationData[index].expanded;
  }
}