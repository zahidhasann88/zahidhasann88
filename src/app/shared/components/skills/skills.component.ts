import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SkillsData {
  technical: SkillGroup[];
  soft: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skillsData: SkillsData = {
    technical: [],
    soft: []
  };

  constructor() { }

  ngOnInit(): void {
  }
}