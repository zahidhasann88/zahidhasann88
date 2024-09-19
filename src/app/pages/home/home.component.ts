import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { listAnimations, routeAnimations } from '../../animation/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [listAnimations, routeAnimations]
})
export class HomeComponent implements OnInit {
  cvLink: string = 'https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing';

  aboutMe1: string = `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`;

  aboutMe2: string = `Currently, I work as a Software Engineer, focusing on developer tooling and infrastructure, with background interest in cloud technologies, 
                      distributed systems, and web applications. I enjoy seeking out creative solutions to complex problems and building things that empower others 
                      to do the same..`

                      aboutMe3: string = `Welcome to my own little corner of the web, where I share <a href="/profile/blog" class="inline-link">notes</a> and resources on topics that interest me. 
                      I spend my free time building new <a href="/profile/projects" class="inline-link">things</a> and capturing in time
                      <a href="/profile/photos" class="inline-link">moments</a>. For a closer look at my career journey, 
                      <a href="${this.cvLink}" target="_blank" rel="noopener noreferrer" class="inline-link">check out my CV</a>. 
                      And if something's on your mind, <a href="mailto:zahidhasann67@gmail.com" class="inline-link">drop me a line</a>!`;


  ngOnInit() {

  }
}