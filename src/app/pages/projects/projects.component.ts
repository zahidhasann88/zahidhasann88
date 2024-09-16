import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Kitchen Car Locator',
      description: 'A web platform for discovering nearby food trucks, leveraging geolocation and real-time data.',
      technologies: ['Next.js', 'Node.js', 'Nest.js', 'Prisma', 'MySQL', 'AWS'],
      imageUrl: '/assets/images/kitchen_car.png',
      githubUrl: '',
      liveUrl: 'https://idoshokudo.com/'
    },
    {
      id: 2,
      title: 'Collaborative Coding Platform',
      description: 'A real-time collaborative IDE for remote pair programming and code reviews.',
      technologies: ['React', 'Typescript', 'Node.js', 'Socket.io'],
      imageUrl: '/assets/images/cc.jpg',
      githubUrl: 'https://github.com/zahidhasann88/collaborative-coding',
      liveUrl: 'https://weather-app-demo.com'
    },
    // Add more projects here
  ];
}
