import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { listAnimations, photoGalleryAnimations } from '../../animation/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  imageWidth: number;
  imageHeight: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [photoGalleryAnimations, listAnimations],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Kitchen Car Locator',
      description: 'A web platform for discovering nearby food trucks, leveraging geolocation and real-time data.',
      technologies: ['Next.js', 'Node.js', 'Nest.js', 'Prisma', 'MySQL', 'AWS'],
      imageUrl: '/profile/assets/images/kitchen_car.png',
      githubUrl: '',
      liveUrl: 'https://idoshokudo.com/',
      imageWidth: 1920,
      imageHeight: 930
    },
    {
      id: 2,
      title: 'Collaborative Coding Platform',
      description: 'A real-time collaborative IDE for remote pair programming and code reviews.',
      technologies: ['React', 'Typescript', 'Node.js', 'Socket.io'],
      imageUrl: '/profile/assets/images/cc.jpg',
      githubUrl: 'https://github.com/zahidhasann88/collaborative-coding',
      liveUrl: 'https://weather-app-demo.com',
      imageWidth: 5952,
      imageHeight: 3968
    },
  ];
}
