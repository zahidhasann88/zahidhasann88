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
  bio: string = "Passionate Full Stack Engineer with expertise in creating efficient, scalable, and user-friendly web applications. Let's connect and build something amazing together!";

  aboutMe1: string = `My name is Zahid Hasan, also known as Zahid. I'm a 28-year-old Software Engineer from Dhaka, Bangladesh.`;

  aboutMe2: string = `Currently, I work as a Software Engineer, focusing on developer tooling and infrastructure, with background interest in cloud technologies, 
                      distributed systems, and web applications. I enjoy seeking out creative solutions to complex problems and building things that empower others 
                      to do the same..`

  aboutMe3: string = `Welcome to my own little corner of the web, where I share notes and resources on topics that interest me.`

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