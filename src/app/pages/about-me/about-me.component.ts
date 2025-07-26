import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faBrain,
  faCalendar,
  faHeart,
  faLightbulb,
  faCoffee,
  faEnvelope,
  faCode,
  faRocket,
  faUsers,
  faBug,
  faBookOpen,
  faGamepad,
  faMusic,
  faCamera,
  faMountain,
  faQuoteLeft,
  faHandshake,
  faGraduationCap,
  faTrophy,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  listAnimations,
  pageLoadAnimation,
  routeAnimations,
} from '../../utils/animation/animations';

interface TimelineItem {
  title: string;
  description: string;
  link?: {
    url: string;
    text: string;
    icon: any;
  };
  dateLabel?: {
    text: string;
    icon: any;
  };
  techTags?: string[];
}

interface TimelineSection {
  title?: string;
  items: TimelineItem[];
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [routeAnimations, pageLoadAnimation],
})
export class AboutMeComponent implements OnInit {
  // Font Awesome Icons
  faArrowLeft = faArrowLeft;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faBrain = faBrain;
  faCalendar = faCalendar;
  faHeart = faHeart;
  faLightbulb = faLightbulb;
  faCoffee = faCoffee;
  faCode = faCode;
  faRocket = faRocket;
  faUsers = faUsers;
  faBug = faBug;
  faBookOpen = faBookOpen;
  faGamepad = faGamepad;
  faMusic = faMusic;
  faCamera = faCamera;
  faMountain = faMountain;
  faQuoteLeft = faQuoteLeft;
  faHandshake = faHandshake;
  faGraduationCap = faGraduationCap;
  faTrophy = faTrophy;
  faTools = faTools;

  // Personal Introduction
  personalIntro = `Hey there! I'm Zahid, a software engineer who enjoys breaking down tricky problems and figuring out 
  how to make things work better. When I'm not deep in code, you’ll usually find me exploring new technologies, 
  reading up on system design, or chasing down a bug that mysteriously appeared overnight. I believe the best software 
  comes from people who care — not just about the code, but about the people using it.`;

  // Quick Stats
  quickStats = [
    { number: '4+', label: 'Years Coding', icon: this.faCode },
    { number: '20+', label: 'Technologies', icon: this.faTools },
    { number: '1000+', label: 'Bugs Fixed', icon: this.faBug },
    { number: '∞', label: 'Coffee Cups', icon: this.faCoffee },
  ];

  // Timeline Sections Data
  timelineSections: TimelineSection[] = [
    {
      // What I Do Section
      items: [
        {
          title: 'Engineering & Development',
          description: `I build web applications that scale well and are easy to maintain. I enjoy working across the stack — 
          from designing databases to building user interfaces. What matters to me is writing code that’s not just working, 
          but also clean and easy to understand. Whether I’m improving API performance or refining the user experience, I 
          like the challenge of making complex things feel simple.`,
          link: {
            url: 'https://github.com/zahidhasann88',
            text: 'View GitHub',
            icon: this.faGithub,
          },
          techTags: [
            'Golang',
            'Node.js',
            '.NET Core',
            'Angular',
            'React',
            'PostgreSQL',
          ],
        },
        {
          title: 'Product Development',
          description: `I believe the best products start with a real understanding of the problem. I like working closely 
          with teams to connect what users actually need with what we can realistically build. My process is all about asking 
          the right questions, prototyping early, and learning from feedback. Over time, I’ve realized that building great 
          products isn’t just about what you create — it’s also about knowing what to leave out.`,
          link: {
            url: 'mailto:zahidhasann67@gmail.com',
            text: 'Get In Touch',
            icon: this.faEnvelope,
          },
        },
        {
          title: 'Problem Solving',
          description: `Every bug is a puzzle, every feature is an opportunity to make someone's day better. I approach problems 
            methodically—breaking them down, understanding the root cause, and finding solutions that are sustainable. 
            I'm that person who actually enjoys debugging sessions and finds satisfaction in refactoring messy code 
            into something beautiful. Sometimes the best solution is the simplest one.`,
          link: {
            url: '#',
            text: 'My Approach',
            icon: this.faBrain,
          },
        },
      ],
    },
    {
      title: 'Skills & Tools.',
      items: [
        {
          title: 'Frontend Technologies',
          description: `I enjoy building user interfaces that look good and feel great to use. Whether it’s getting the 
          details right in a design or adding subtle animations, I focus on creating experiences people actually enjoy. 
          I’m comfortable working with modern frontend frameworks and always curious about what’s new in the frontend world.`,
          dateLabel: {
            text: 'UI/UX Focus',
            icon: this.faCode,
          },
          techTags: [
            'Angular',
            'React',
            'TypeScript',
            'SCSS',
            'Tailwind',
            'RxJS',
          ],
        },
        {
          title: 'Backend & Database',
          description: `I like building solid backends where logic, performance, and scalability come together. 
          I focus on designing APIs that are easy for frontend teams to work with, and database structures that 
          can handle growth over time. Performance and security are always part of the equation.`,
          dateLabel: {
            text: 'Server Side',
            icon: this.faTools,
          },
          techTags: [
            'Golang',
            'Node.js',
            '.NET Core',
            'PostgreSQL',
            'MySQL',
            'Redis',
            'Docker',
          ],
        },
        {
          title: 'Development Workflow',
          description: `Good tools make good developers great. I'm passionate about setting up development environments 
            that boost productivity and reduce friction. From automated testing to deployment pipelines, I believe 
            in investing time upfront to save hours later.`,
          dateLabel: {
            text: 'DevOps',
            icon: this.faRocket,
          },
          techTags: [
            'Git',
            'GitHub Actions',
            'AWS',
            'Jenkins',
            'Jest',
            'Mocha',
          ],
        },
      ],
    },

    {
      title: 'My Journey.',
      items: [
        {
          title: 'The Beginning: First Hello World',
          description: `Started my coding journey with a simple HTML page and thought I was a wizard when I made text change colors. 
            Those late nights learning JavaScript fundamentals, struggling with CSS layouts, and the pure joy of seeing 
            my first dynamic web page work—that's when I knew I found my calling. Every error message was a lesson, 
            and every working feature felt like magic.`,
          dateLabel: {
            text: '2017-2018',
            icon: this.faCalendar,
          },
        },
        {
          title: 'Building Real Things',
          description: `This is when things got serious. Started building actual applications that people could use, not just 
            tutorial projects. Learned about databases, APIs, authentication, and all the "boring" stuff that makes 
            applications actually work in the real world. Also discovered that deployment is an art form and that 
            "it works on my machine" is not a valid argument.`,
          dateLabel: {
            text: '2019-2021',
            icon: this.faCalendar,
          },
        },
        {
          title: 'Scaling & Architecture',
          description: `Started thinking beyond individual features to entire systems. Learned about microservices, database 
            optimization, caching strategies, and how to design systems that don't fall over when more than 10 people 
            use them. Discovered that premature optimization is real, but so is the pain of rebuilding everything 
            when you didn't plan for growth.`,
          dateLabel: {
            text: '2022-2024',
            icon: this.faCalendar,
          },
        },
        {
          title: 'Always Learning 🚀',
          description: `The tech world moves fast, and I love that about it. Currently diving deep into AI/ML integration, 
            exploring cloud-native architectures, and always on the lookout for tools that can solve problems better. 
            I'm also getting more interested in developer experience and how we can make the process of building 
            software more enjoyable and efficient.`,
          dateLabel: {
            text: 'Currently',
            icon: this.faCalendar,
          },
        },
      ],
    },
    
    {
      title: 'Beyond the Code.',
      items: [
        {
          title: "When I'm Not Coding",
          description: `I'm a curious person by nature. I love reading about technology trends, watching YouTube videos about 
            random engineering topics, and occasionally attempting to cook something more complex than instant noodles 
            (with mixed results). I also enjoy long walks where I inevitably end up thinking about code architecture 
            or that bug I couldn't fix earlier.`,
          dateLabel: {
            text: 'Interests',
            icon: this.faHeart,
          },
        },
        {
          title: 'Philosophy & Approach',
          description: `I believe in writing code like someone else has to maintain it (because they probably will). 
            I think the best solutions are often the simplest ones, and that good software should feel invisible 
            to the user. I also believe in the power of good documentation, meaningful commit messages, and that 
            code reviews are opportunities to learn, not battles to win.`,
          dateLabel: {
            text: 'Values',
            icon: this.faLightbulb,
          },
        },
        {
          title: "Let's Connect",
          description: `I'm always up for interesting conversations about technology, product development, or just about anything 
            really. Whether you want to discuss a project idea, share a cool technical challenge, or just chat about 
            the latest developments in our field, feel free to reach out. The best collaborations often start with 
            simple conversations.`,
          dateLabel: {
            text: 'Coffee Chat?',
            icon: this.faCoffee,
          },
        },
      ],
    },
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
