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

export interface Skill {
  name: string;
  icon: string;
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

  skills: Skill[] = [
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'TypeScript', icon: 'assets/icons/ts-logo.svg' },
    { name: 'Express.js', icon: 'assets/icons/expressjs.svg' },
    { name: 'Nest.js', icon: 'assets/icons/Nest.js.svg' },
    { name: 'Golang', icon: 'assets/icons/golang.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgres.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Docker', icon: 'assets/icons/docker.svg' },
    { name: 'AWS', icon: 'assets/icons/aws.svg' },
    { name: 'Kafka', icon: 'assets/icons/kafka.svg' },
    { name: 'Redis', icon: 'assets/icons/redis.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },
    { name: 'Next.js', icon: 'assets/icons/nextjs.svg' },
    { name: 'Tailwind', icon: 'assets/icons/tailwind.svg' },
    // More skills can be added here in the future
  ];

  constructor() { }

  ngOnInit(): void {
  }
}