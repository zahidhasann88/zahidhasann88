import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
currentYear: number = new Date().getFullYear();

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faXTwitter;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faEnvelope = faEnvelope;
  faCode = faCode;
  
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/zahidhasann88', icon: faGithub },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/zahidhasann',
      icon: faLinkedin,
    },
    { name: 'Twitter', url: 'https://x.com/zahidhasann15', icon: faXTwitter },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/12301102/zahid-hasan',
      icon: faStackOverflow,
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@jahidhasann67',
      icon: faMedium,
    },
    { name: 'Email', url: 'mailto:zahidhasann67@gmail.com', icon: faEnvelope },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/u/zahidhasann67/',
      icon: faCode,
    },
  ];
}
