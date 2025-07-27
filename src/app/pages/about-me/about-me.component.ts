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
  personalIntro = `Hey there! I'm a software engineer who enjoys building things for the internet and figuring out how to 
  make things work better. When I'm not deep in code, you’ll usually find me exploring new technologies, reading about 
  system design, or chasing down a bug that mysteriously appeared overnight. I believe the best software comes from 
  people who care — not just about the code, but about the people using it.`;

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
          title: 'Engineering',
          description: `At the heart of every great application is a backend that’s thoughtfully designed and rock solid. 
          I focus on building those foundations—crafting APIs that handle data efficiently, designing databases that scale 
          gracefully, and ensuring systems stay reliable as they grow. But I don’t just stay behind the scenes. I also dive 
          into frontend work to connect the dots and create seamless experiences users actually enjoy. Writing clear, 
          maintainable code is important to me because software should be easy to understand and evolve over time. 
          I enjoy unraveling complex challenges and turning them into straightforward solutions that perform well 
          today and adapt tomorrow. Engineering, to me, is about blending precision with practicality to build tools 
          that truly work — quietly and confidently.`,
          link: {
            url: 'https://github.com/zahidhasann88',
            text: 'View GitHub',
            icon: this.faGithub,
          },
          // techTags: [
          //   'Golang',
          //   'Node.js',
          //   '.NET Core',
          //   'Angular',
          //   'React',
          //   'PostgreSQL',
          // ],
        },
        {
          title: 'Product',
          description: `Great products begin with a deep understanding of the real problems people face. I enjoy collaborating 
          closely with teams to bridge the gap between user needs and practical solutions we can build. My approach focuses 
          on asking thoughtful questions, prototyping early, and iterating based on feedback. Over time, I’ve learned that 
          building something truly valuable isn’t just about adding features — it’s about knowing what to leave out to keep 
          things simple and effective.`,
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
          description: `More than just what users see, the frontend is about making sure everything runs smoothly behind the 
          scenes — syncing perfectly with backend systems and delivering a seamless, dependable experience. 
          Crafting components that communicate well, manage data efficiently, and respond without delay is essential. 
          The goal is to simplify complex processes into interfaces that feel natural and reliable. Keeping up with the 
          latest frontend tools helps keep these systems strong and adaptable.`,
          dateLabel: {
            text: 'Integration First',
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
          description: `Backends are where the core of an application lives — the place where complex logic, data, and 
          performance come together. My focus is on crafting APIs that don’t just work, but feel clear and predictable for 
          frontend teams to build upon. I design databases with growth in mind, so they can handle increasing demands without 
          breaking a sweat. Performance and security aren’t just boxes to check; they’re woven into the fabric of everything 
          I build, ensuring the system stays strong and reliable long-term.`,
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
          title: 'Learning Something Great 😉',
          description: `We continue learning everyday.`,
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
        // {
        //   title: 'Philosophy & Approach',
        //   description: `I believe in writing code like someone else has to maintain it (because they probably will). 
        //     I think the best solutions are often the simplest ones, and that good software should feel invisible 
        //     to the user. I also believe in the power of good documentation, meaningful commit messages, and that 
        //     code reviews are opportunities to learn, not battles to win.`,
        //   dateLabel: {
        //     text: 'Values',
        //     icon: this.faLightbulb,
        //   },
        // },
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
