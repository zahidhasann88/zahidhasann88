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
import { APP_CONSTANTS } from '../../core/utils/app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
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
      company: 'Tech Solutions Ltd.',
      position: 'Senior Software Engineer',
      period: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Led backend development initiatives and designed scalable system architectures. Collaborated with cross-functional teams to deliver high-performance web applications.',
      achievements: [
        'Improved system performance by 40% through database optimization',
        'Led migration to microservices architecture',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      company: 'Digital Innovations Inc.',
      position: 'Software Engineer',
      period: '2020 - 2022',
      location: 'Dhaka, Bangladesh',
      description: 'Developed and maintained full-stack applications using modern technologies. Focused on creating robust APIs and intuitive user interfaces.',
      achievements: [
        'Built RESTful APIs serving 10k+ daily requests',
        'Implemented automated testing reducing bugs by 60%',
        'Collaborated on successful product launches'
      ]
    }
  ];

  // Education data
  readonly educationData = [
    {
      institution: 'North South University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2016 - 2020',
      location: 'Dhaka, Bangladesh',
      description: 'Focused on software engineering, algorithms, and system design. Participated in programming competitions and technical projects.',
      achievements: [
        'Dean\'s List for academic excellence',
        'Led university programming club',
        'Completed thesis on distributed systems'
      ]
    }
  ];

  // Skills data
  readonly skillsData = {
    technical: [
      { category: 'Frontend', skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS'] },
      { category: 'Backend', skills: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'REST APIs'] },
      { category: 'Database', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Database Design'] },
      { category: 'DevOps', skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'] },
      { category: 'Tools', skills: ['VS Code', 'Postman', 'Figma', 'Jira', 'Slack', 'GitHub'] }
    ],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Mentoring', 'Adaptability']
  };

  // Certifications data
  readonly certificationsData = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CSA-123456',
      description: 'Demonstrated expertise in designing distributed systems on AWS platform.'
    },
    {
      name: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: '2022',
      credentialId: 'PSM-789012',
      description: 'Certified in agile methodologies and scrum framework implementation.'
    }
  ];

  // Tab state management
  activeTab: string = 'experience';
  
  readonly tabs = [
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
    return (this.componentState?.config?.icons as any)?.[iconName];
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
