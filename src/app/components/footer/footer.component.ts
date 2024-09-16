import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter, faStackOverflow, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faEnvelope = faEnvelope;
  faCode = faCode;
  currentYear: number = new Date().getFullYear();
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/zahidhasann88', icon: faGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/zahidhasann', icon: faLinkedin },
    { name: 'Twitter', url: 'https://x.com/zahidhasann15', icon: faTwitter },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/12301102/zahid-hasan', icon: faStackOverflow },
    { name: 'Medium', url: 'https://medium.com/@jahidhasann67', icon: faMedium },
    { name: 'Email', url: 'mailto:zahidhasann67@gmail.com', icon: faEnvelope },
    { name: 'Leetcode', url: 'https://leetcode.com/u/zahidhasann67/', icon: faCode }
  ];
}
