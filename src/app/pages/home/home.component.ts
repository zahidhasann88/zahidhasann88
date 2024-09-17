import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter,faStackOverflow, faMedium, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  typedText: string = '';
  fullText: string = "Hello, World! I'm Zahid Hasan, I build things for internet.";
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faEnvelope = faEnvelope;
  faCode = faCode;
  skills: string[] = ['JavaScript', 'TypeScript', 'Golang', 'Node.js', 'Express.js', 'Nest.js', 'Angular', 'React', 'SQL', 'Git', 'AWS', 'Docker'];
  cvLink: string = 'https://drive.google.com/file/d/your-cv-file-id/view?usp=sharing';

  aboutMe1: string = `
    As a Fullstack Engineer with 3.5 years of experience, I've had the chance to work on some really cool projects 
    that have challenged me and helped me grow. I love diving into complex problems and coming up with elegant solutions. 
    My journey in tech has been an exciting ride, from crafting responsive front-end interfaces to architecting scalable 
    back-end systems.
  `;

  aboutMe2: string = `
    When I'm not coding, you'll probably find me tinkering with new technologies, contributing to open-source projects, 
    or sharing what I've learned through mentoring and tech blogs. I'm a firm believer in continuous learning and always 
    strive to stay on top of the latest industry trends.
  `

  aboutMe3: string = `
    Outside of tech, I'm an avid hiker and nature enthusiast. There's something about conquering a challenging trail 
    that feels a lot like solving a tough coding problem – it's all about persistence and enjoying the journey!
  `

  experiences: any[] = [
    {
      company: 'Satcom IT Limited',
      role: 'Software Engineer',
      companyLink: 'https://satcomit-bd.com/',
      period: 'March 2022 - Present',
      description: [
        'Lead development of scalable web applications using Angular, Node.js, and AWS',
        'Implemented microservices architecture to improve system scalability and maintainability',
        'Optimized database queries and implemented caching strategies, resulting in a 40% improvement in application performance',
        'Mentored junior developers and conducted code reviews to ensure high code quality and best practices'
      ]
    },
    {
      company: 'PQS Japan',
      role: 'Junior Software Engineer',
      companyLink: 'https://www.pqsjapan.jp/',
      period: 'Oct 2021 - Feb 2022',
      description: [
        'Developed and maintained multiple client projects using React and Express.js',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Collaborated with UX designers to implement intuitive user interfaces',
        'Participated in agile development processes, including daily stand-ups and sprint planning'
      ]
    },
    {
      company: 'Karamsangsthan Limited',
      role: 'Software Developer',
      companyLink: 'https://www.karmasangsthan.com.bd/',
      period: 'Dec 2020 - June 2021',
      description: [
        'Developed and maintained client projects using React and Express.js',
        'Integrated third-party APIs and services to enhance application functionality',
        'Implemented unit tests and end-to-end tests to ensure application reliability',
        'Assisted in the deployment and maintenance of applications on cloud platforms'
      ]
    }
  ];

  education: any[] = [
    {
      institution: 'Daffodil International University',
      degree: 'Bachelor of Science in Software Engineering',
      period: '2017 - 2020',
      achievements: [
        'Coursework: ',
      ]
    }
  ];

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
  }
}