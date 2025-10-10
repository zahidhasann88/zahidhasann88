import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
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
    faLocationDot
  };

  constructor() { }

  ngOnInit(): void {
  }
}