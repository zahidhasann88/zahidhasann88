import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { SafeHtml } from '@angular/platform-browser';

import {
  pageLoadAnimation,
  routeAnimations,
} from '../../core/utils/animation/animations';
import {
  Config,
  HomeComponentState,
  Project,
  SocialLink,
} from '../../core/models/config.interfaces';
import { ConfigService } from '../../core/services/config.service';
import { HighlightService } from '../../core/services/highlight.service';

// Import new components
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { AboutMeComponent } from '../../shared/components/about-me/about-me.component';
import { ExperienceComponent } from '../../shared/components/experience/experience.component';
import { EducationComponent } from '../../shared/components/education/education.component';
import { SkillsComponent } from '../../shared/components/skills/skills.component';
import { CertificationsComponent } from '../../shared/components/certifications/certifications.component';
import { PortfolioTabsComponent } from '../../shared/components/portfolio-tabs/portfolio-tabs.component';
import { APP_CONSTANTS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FontAwesomeModule,
    HeroSectionComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    CertificationsComponent,
    PortfolioTabsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routeAnimations, pageLoadAnimation],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly configService = inject(ConfigService);
  private readonly highlightService = inject(HighlightService);

  private readonly destroy$ = new Subject<void>();

  componentState!: HomeComponentState;

  readonly constants = APP_CONSTANTS;

  // Experience data
  readonly experienceData = [
    {
      company: 'Satcom IT Limited.',
      position: 'Software Engineer',
      period: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Engineered scalable backend systems with Node.js (Express, NestJS) and Golang (Gin, GORM), developed RESTful APIs with request validation and structured logging to support high-throughput microservices operations.',
      achievements: [
        'Designed and implemented secure inter-service communication using REST APIs with key-based authentication, Redis caching, and Kafka messaging, enabling seamless cross-module data sharing across business domains.',
        'Implemented Role-Based Access Control (RBAC) with granular permissions, securing data across multi-tenant environments',
        'Refactored legacy monolithic components into microservices using Node.js, Express.js, and TypeScript, enabling independent scaling and improving system modularity.',
        'Leveraged React and Angular’s modular component architecture to create reusable, scalable components, simplifying development, improving code consistency, and enabling easier maintenance and debugging.',
        'Built automated CI/CD pipelines with Docker and GitHub Actions, reducing deployment cycles, and minimizing production incidents through improved stability.'
      ]
    },
    {
      company: 'PQS Japan.',
      position: 'Junior Software Engineer',
      period: '2021 - 2022',
      location: 'Dhaka, Bangladesh',
      description: 'Developed backend services using .NET Core Web API and Entity Framework, creating RESTful APIs for an ERP system with organized data models and efficient database operations.',
      achievements: [
        'Implemented AWS S3 buckets for storing and retrieving large volumes of report data, streamlining data management and retrieval.',
        'Leveraged Angular with reactive forms and TypeScript to build modular, reusable frontend components, enhancing maintainability and user experience.',
      ]
    },
    {
      company: 'Karmasangsthan Limited.',
      position: 'Software Developer',
      period: '2020 - 2021',
      location: 'Remote',
      description: 'Developed and integrated RESTful APIs using Node.js and Express with MySQL databases, leveraging TypeORM for efficient database modeling and management.',
      achievements: [
        'Implemented a Node and Express backend using the middleware design pattern to integrate authentication within API routes such as session validation with JWTs (JSON Web Tokens) and password hashing with bcrypt.',
        'Leveraged React’s modular component architecture to build reusable UI components, enabling rapid development and customization of an interactive, responsive frontend.',
      ]
    }
  ];

  // Education data
  readonly educationData = [
    {
      institution: 'Daffodil International University',
      degree: 'Bachelor of Science in Software Engineering',
      period: '2017 - 2020',
      location: 'Dhaka, Bangladesh',
      description: 'Focused on software engineering, algorithms, and system design. Participated in programming competitions and technical projects.',
      achievements: [
        'Core Member university programming club',
        'Completed thesis on Machine Learning'
      ]
    }
  ];

  // Skills data
  readonly skillsData = {
    technical: [
      { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'] },
      { category: 'Backend', skills: ['Node.js', 'Express.js', 'Golang', 'Gin', 'C#', '.NET Core', 'REST APIs'] },
      { category: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Design'] },
      { category: 'Cloud & DevOps', skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'] },
    ],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Mentoring', 'Adaptability']
  };

  // Certifications data
  readonly certificationsData = [
    {
      name: 'AWS Educate Introduction to 101',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: '148239f4-1caf-4adb-929a-5a4fae50f9b0',
      description: 'Introduction to Cloud 101 – Gained foundational knowledge of AWS cloud services, created simple cloud applications in a virtual lab, and understood key technical roles for cloud computing success..'
    },
    {
      name: 'AI For Everyone',
      issuer: 'Coursera',
      date: '2020',
      credentialId: '4Z8LV2GW58V2',
      description: 'Learned the fundamentals of artificial intelligence, including its capabilities, limitations, and applications across industries. Gained insights into how AI impacts business strategy, workflow automation, and data-driven decision-making. Developed an understanding of AI terminology, ethical considerations, and how to implement AI solutions effectively in real-world scenarios.'
    }
  ];

  // Tab state management
  activeTab: string = 'about';
  
  readonly tabs = [
    { id: 'about', label: 'About Me', icon: 'faUser' },
    { id: 'experience', label: 'Experience', icon: 'faBriefcase' },
    { id: 'education', label: 'Education', icon: 'faGraduationCap' },
    { id: 'skills', label: 'Skills', icon: 'faCode' },
    { id: 'certifications', label: 'Certifications', icon: 'faTrophy' }
  ];

  ngOnInit(): void {
    this.initializeComponent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    combineLatest({
      config: this.configService.getConfig(),
      projects: this.configService.getProjects(),
      socialLinks: this.configService.getSocialLinks(),
    })
      .pipe(
        map(({ config, projects, socialLinks }) => ({
          config,
          projects,
          socialLinks,
          currentYear: this.configService.getCurrentYear(),
        })),
        takeUntil(this.destroy$)
      )
      .subscribe((state) => {
        this.componentState = state;
      });
  }

  getHighlightedDescription(
    description: string,
    keywords: readonly string[]
  ): SafeHtml {
    return this.highlightService.highlightKeywords(description, keywords);
  }

  getHighlightedText(text: string): SafeHtml {
    return this.highlightService.highlightNumbers(text);
  }

  onContactClick(): void {
    window.location.href = `mailto:${this.constants.PROFILE.EMAIL}`;
  }

  onSocialLinkClick(socialLink: SocialLink): void {
    window.open(socialLink.url, '_blank');
  }

  onProjectLinkClick(project: Project): void {
    window.open(project.url, '_blank');
  }

  // Tab management methods
  switchTab(tabId: string): void {
    this.activeTab = tabId;
  }

  isActiveTab(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  getTabIcon(iconName: string) {
    const iconMap: { [key: string]: any } = {
      'faUser': this.icons.faUser,
      'faBriefcase': this.icons.faBriefcase,
      'faGraduationCap': this.icons.faGraduationCap,
      'faCode': this.icons.faCode,
      'faTrophy': this.icons.faTrophy
    };
    return iconMap[iconName] || this.icons.faUser;
  }

  get buttonLabels() {
    return this.constants.BUTTONS;
  }

  get sectionTitles() {
    return this.constants.SECTION_TITLES;
  }

  get profile() {
    return this.componentState?.config?.profile;
  }

  get aboutMe() {
    return this.componentState?.config?.aboutMe;
  }

  get icons() {
    return this.componentState?.config?.icons;
  }

  get isLoaded(): boolean {
    return !!this.componentState;
  }
}
